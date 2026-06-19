
var editor;
var definitionFiles = [
	 "types/shared/global.d.ts"
	,"types/shared/JavaScript.d.ts"
	,"types/shared/PlugPlugExternalObject.d.ts"
	,"types/shared/ScriptUI.d.ts"
	,"types/shared/XMPScript.d.ts"
	,"types/Photoshop/2015.5/index.d.ts"
];

var tsconfigFiles = [
	 "types/Photoshop/2015.5/tsconfig.json"
	,"types/shared/tsconfig.json"
];
var scriptAutoSaveLocalStorageKey = "script_auto_save";

require.config({
	paths: {
		vs:"https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.52.0/min/vs"
	}
});

require(["vs/editor/editor.main"], async function() {
	monaco.editor.defineTheme("my-vscode-dark",{
		base: "vs-dark",
		inherit: true,
		rules: [],
		colors: {
			"editor.background":"#1e1e1e"
		}
	});

	monaco.editor.setTheme("my-vscode-dark");

	var savedCode = localStorage.getItem(scriptAutoSaveLocalStorageKey);
	var editorValue = savedCode || demos.default;

	editor = monaco.editor.create(
		document.getElementById("editor"),
		{
			value: editorValue,
			language: "javascript",
			automaticLayout: true,
			minimap: { enabled:true},
			fontSize: 14,
			suggestOnTriggerCharacters: true,
			quickSuggestions: true
		}
	);

		
	editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, runCode);
	editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, saveFile);

	const model = editor.getModel();
	model.onDidChangeContent(() => {
		var currentScriptCode = model.getValue();
		console.log("auto-saved");
		localStorage.setItem(scriptAutoSaveLocalStorageKey, currentScriptCode);
	});

	await loadTypeDefinitions();
});


// Load .d.ts for Intellisense
async function loadTypeDefinitions() {
	var tsDefaults = monaco.languages.typescript.javascriptDefaults;
	for (var file of definitionFiles) {
		try {
			var response = await fetch(file);
			var text = await response.text();
			tsDefaults.addExtraLib(text, "file:///" + file);
			// console.log("Loaded definition:", file);
		}
		catch(e) {
			console.warn("Could not load file", file);
		}
	}

	for (var file of tsconfigFiles) {
		try {
			var response = await fetch(file);
			var json = await response.text();

			tsDefaults.setCompilerOptions(JSON.parse(json));
			console.log("Loaded config:", file);
		}
		catch(e) {
			console.warn("Could not load file", file);
		}
	}

	tsDefaults.setDiagnosticsOptions({
		noSemanticValidation:false,
		noSyntaxValidation:false
	});
}

function runCode() {
	var code = editor.getValue();
	// console.log(code);
	window.parent.postMessage(code, "*");
}


function saveFile() {
	console.log("Saving script file...");
	var blob = new Blob([editor.getValue()], { type:"text/javascript" });
	var url = URL.createObjectURL(blob);
	var a = document.createElement("a");
	a.href=url;
	a.download="script.js";
	a.click();
	URL.revokeObjectURL(url);
}


var fileInput = document.getElementById("fileInput");
function loadFile() {
	fileInput.click();
}

fileInput.onchange = (e) => {
	var file = e.target.files[0];
	loadFile(file);
}

document.getElementById("run").onclick = runCode;
document.getElementById("save").onclick = saveFile;
document.getElementById("load").onclick = loadFile;

var demos = {
	default: `
// THIS PLUGIN EDITOR IS IN BETA
// WARNING: the save feature is unstable yet, make copies of your scripts.
// use at your own risk

alert("Hello Photopea scripters!");
`,
	hello: `
alert("Hello Photopea!");
`,
	processLayers: `
var lays = app.activeDocument.layers;

for(var i=0; i<lays.length; i++)
{
	//lays[i].visible = false;
	//lays[i].opacity = 50;
	lays[i].name = "My Layer "+i;
}
`,
	processCloneLayers: `
var orig = app.activeDocument.activeLayer;
var cnt = 12;
var angle = Math.floor(360 / cnt);

for(var i=1; i<cnt; i++)
{
	var nlay = orig.duplicate();
	//nlay.translate(30*i, 20*i);
	nlay.rotate(angle * i, AnchorPosition.BOTTOMCENTER);
}
`,
};

document.getElementById("demo-hello").onclick = () => editor.setValue(demos.hello);
document.getElementById("demo-process-layers").onclick = () => editor.setValue(demos.processLayers);
document.getElementById("demo-clone-layers").onclick = () => editor.setValue(demos.processCloneLayers);


// Drag & Drop
var dropZone = document.getElementById("dropZone");

document.addEventListener("dragover", (e) => {
	e.preventDefault();
	dropZone.classList.add("drag");
});

document.addEventListener("dragleave", () => {
	dropZone.classList.remove("drag");
});

var fileExtensionsAllowed = [
	".txt",
	".js",
	".jsx",
	".jsxbin"
];

document.addEventListener("drop", (e) => {
	e.preventDefault();
	dropZone.classList.remove("drag");
	var file = e.dataTransfer.files[0];
	if (!file) {
		return;
	}
	var isAllowedExtension = fileExtensionsAllowed.some(ext => file.name.toLowerCase().endsWith(ext));
	if (isAllowedExtension) {
		loadFile(file);
	}
});

function loadFile(file) {
	var reader = new FileReader();
	reader.onload = () => {
		editor.setValue(reader.result);
	};
	reader.readAsText(file);
}

