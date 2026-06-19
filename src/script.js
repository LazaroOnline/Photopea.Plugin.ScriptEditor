
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

	editor = monaco.editor.create(
		document.getElementById("editor"),
		{
			value:
`// Template:
// THIS PLUGIN EDITOR IS IN BETA
// WARNING: it loses your pending changes when you hide this view
// use at your own risk

alert("Hello Photopea scripters!");
`,
			language: "javascript",
			automaticLayout: true,
			minimap: { enabled:true},
			fontSize: 14,
			suggestOnTriggerCharacters: true,
			quickSuggestions: true
		}
	);
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
			console.log("Loaded definition:", file);
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
};

fileInput.onchange=function(e) {
	var file = e.target.files[0];
	loadFile(file);
};

document.getElementById("run").onclick = runCode
document.getElementById("save").onclick = saveFile;
document.getElementById("load").onclick = loadFile


// Drag & Drop
var dropZone = document.getElementById("dropZone");

document.addEventListener("dragover", function(e) {
	e.preventDefault();
	dropZone.classList.add("drag");
});

document.addEventListener("dragleave", function() {
	dropZone.classList.remove("drag");
});

var fileExtensionsAllowed = [
	".txt",
	".js",
	".jsx",
	".jsxbin"
];

document.addEventListener("drop", function(e) {
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
	reader.onload=function() {
		editor.setValue(
			reader.result
		);
	};
	reader.readAsText(file);
}


document.addEventListener("keydown", (e) => {
	if (e.ctrlKey && e.key === 'Enter') {
		runCode();
	}
	if (e.ctrlKey && e.key.toUpperCase() === 'S') {
		console.log("Saving file...");
		saveFile();
		e.stopPropagation();
		e.preventDefault();
	}
});
