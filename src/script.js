
var editor;
var definitionFiles = [
	// "types/photoshop-bundle.d.ts"
	 "types/shared/JavaScript.d.ts"
	,"types/shared/ScriptUI.d.ts"
	,"types/shared/PlugPlugExternalObject.d.ts"
	,"types/shared/XMPScript.d.ts"
	,"types/shared/global.d.ts"
	,"types/Photoshop/2015.5/index.d.ts"
];

var tsconfigFiles = [
	 "types/Photoshop/2015.5/tsconfig.json"
	,"types/shared/tsconfig.json"
];
var scriptAutoSaveLocalStorageKey = "script_auto_save";

var fileExtensionsAllowed = [
	".txt",
	".js",
	".jsx",
	".jsxbin"
];

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
var topLayers = app.activeDocument.layers;

for (var i=0; i < topLayers.length; i++)
{
	var layer = topLayers[i];
	// layer.visible = false;
	// layer.opacity = 50;
	layer.name = "My Layer " + i;
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
	var monacoElement = document.getElementById("editor");
	var editorOptions = {
		 value: editorValue
		,language: "javascript"
		,automaticLayout: true
		,minimap: { enabled: false}
		,fontSize: 14
		,suggestOnTriggerCharacters: true
		,quickSuggestions: true
		,glyphMargin: false		 // Hide breakpoints margin
		,lineDecorationsWidth: 0 // Reduce decoration space
		,lineNumbersMinChars: 3
	};
	editor = monaco.editor.create(monacoElement, editorOptions);
	editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, runCode);
	editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.shiftKey | monaco.KeyCode.KeyS, saveFileAs);
	editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, saveFileTry);
	editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyO, openFileDialogTry);

	// var model = monaco.editor.createModel(editorValue, "javascript", monaco.Uri.parse("file:///types/Photoshop/2015.5/index.d.ts"));
	// editor.setModel(model);

	var model = editor.getModel();
	model.onDidChangeContent(() => autoSaveInLocalStorageWithDebounce(model));
	editor.onDidChangeModelContent(() => setIsDirty(true));
	monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
		target: monaco.languages.typescript.ScriptTarget.ES3,
		allowNonTsExtensions: true,
		noLib: true
	});
	await loadTypeDefinitions();
	// await loadTsConfigFiles();
});

// Load .d.ts for Intellisense

async function loadTypeDefinitions_FromBundle() {
	var psTypeDefinitionsUrl = "types/photoshop-bundle.d.ts";
	var psTypeDefinitions = await fetchText(psTypeDefinitionsUrl);
	var virtualFilePath = 'file:///photoshop-extendscript.d.ts';
	monaco.languages.typescript.javascriptDefaults.addExtraLib(psTypeDefinitions, virtualFilePath);
}

async function loadTypeDefinitions() {
	var tsDefaults = monaco.languages.typescript.javascriptDefaults;
	for (var file of definitionFiles) {
		try {
			var text = await fetchText(file);
			tsDefaults.addExtraLib(text, "file:///" + file);
			// console.log("Loaded definition:", file);
		}
		catch(e) {
			console.warn("Could not load file", file);
		}
	}
}

async function loadTsConfigFiles() {
	var tsDefaults = monaco.languages.typescript.javascriptDefaults;
	for (var file of tsconfigFiles) {
		try {
			var json = await fetchText(file);
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

function fetchText(url) {
	return fetch(url).then(r => r.text());
}

function runCode() {
	var code = editor.getValue();
	// console.log(code);
	window.parent.postMessage(code, "*");
}

function autoSaveInLocalStorage(model) {
	var currentScriptCode = model.getValue();
	localStorage.setItem(scriptAutoSaveLocalStorageKey, currentScriptCode);
	// console.log("auto-saved script in local-storage");
}
var timeout;
var autoSaveMaxMs = 400;
function autoSaveInLocalStorageWithDebounce(model) {
	clearTimeout(timeout);
	timeout = setTimeout(() => autoSaveInLocalStorage(model), autoSaveMaxMs);
}
var currentFileHandle;
var currentFileName;
var isDirty = false;
function setCurrentFileName(fileName) {
	currentFileName = fileName;
	var fileNameElement = document.getElementById("filename");
	fileNameElement.innerText = currentFileName;
}
function setCurrentFileHandle(fileHandle) {
	currentFileHandle = fileHandle;
	setCurrentFileName(fileHandle.name);
}
function setIsDirty(newValue) {
	isDirty = newValue;
	var saveButton = document.getElementById("btn-save");
	saveButton.disabled = !isDirty;
}

async function openFileDialogTry() {
	try {
		await openFileDialogV2();
	} catch (ex) {
		if (ex.name == "AbortError") {
			return;
		}
		// console.log(ex);
		await openFileDialogV1();
	}
}
async function openFileDialogV2() {
	var [fileHandle] = await window.showOpenFilePicker({
		excludeAcceptAllOption: false,
		multiple: false,
		types: [{
			description: "Text files and scripts",
			accept: { "text/plain": fileExtensionsAllowed }
		}],
	});

	setCurrentFileHandle(fileHandle);
	var file = await fileHandle.getFile();
	var fileContent = await file.text();
	//setEditorContent(fileContent);
	editor.setValue(fileContent);
	setIsDirty(false);
}

async function saveFileAs() {
	// var fileHandle = await window.showSaveFilePicker({ suggestedName: "script.jsx" });
	fileHandle = await window.showSaveFilePicker({ suggestedName: "script.jsx" });
	setCurrentFileHandle(fileHandle)
	var writable = await fileHandle.createWritable();
	await writable.write(editor.getValue());
	await writable.close();
	setIsDirty(false);
}

async function saveFileTry() {
	try {
		await saveFileV2();
	} catch (ex) {
		if (ex.name == "AbortError") {
			return;
		}
		// console.log(ex);
		saveFileV1();
	}
}
async function saveFileV2() {
	if (!currentFileHandle) {
		await saveFileAs();
		return;
	}
	// if (!isDirty) { return; }
	var writable = await currentFileHandle.createWritable();
	await writable.write(editor.getValue());
	await writable.close();
	setIsDirty(false);
}

function saveFileV1() {
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
function openFileDialogV1() {
	fileInput.click();
}

fileInput.onchange = (e) => {
	var file = e.target.files[0];
	loadFile(file);
}

document.getElementById("btn-run").onclick = runCode;
document.getElementById("btn-save").onclick = saveFileTry;
document.getElementById("btn-save-as").onclick = saveFileAs;
document.getElementById("btn-load").onclick = openFileDialogTry;

document.getElementById("btn-demo-hello").onclick = () => setEditorContent(demos.hello);
document.getElementById("btn-demo-process-layers").onclick = () => setEditorContent(demos.processLayers);
document.getElementById("btn-demo-clone-layers").onclick = () => setEditorContent(demos.processCloneLayers);

function loadFile(file) {
	var reader = new FileReader();
	reader.onload = () => {
		setEditorContent(reader.result);
		// editor.setValue(reader.result);
	};
	reader.readAsText(file);
}

// Unlike "editor.setValue()" this preserves document history:
function setEditorContent(newText) {
	var model = editor.getModel();
	editor.pushUndoStop();
	editor.executeEdits('replace-doc', [{
		range: editor.getModel().getFullModelRange(),
		text: newText
	}]);
	editor.pushUndoStop();
}

// _____________________________________________________________

// Drag & Drop

var dropZone = document.getElementById("dropZone");

document.addEventListener("dragover", (e) => {
	e.preventDefault();
	dropZone.classList.add("drag");
});

document.addEventListener("dragleave", () => {
	dropZone.classList.remove("drag");
});

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

// _____________________________________________________________

// DropDown menus

initializeDropdowns();
document.addEventListener('click', closeAllDropdowns);

function initializeDropdowns() {
	var dropdownTriggers = document.querySelectorAll(".dropdown-trigger");
	for (var dropdownTrigger of dropdownTriggers) {
		dropdownTrigger.addEventListener('click', function (e) {
			e.stopPropagation();
			var dropdownContainer = e.target.closest(".dropdown");
			var menu = dropdownContainer.querySelector(".dropdown-menu");
			var wasOpen = menu.classList.contains('open');
			closeAllDropdowns();
			if (!wasOpen) {
				menu.classList.add('open');
			}
		});
	}
}

function closeAllDropdowns() {
	var openMenus = document.querySelectorAll('.dropdown-menu.open');
	for (var openMenu of openMenus) {
		openMenu.classList.remove('open');
	}
}

// _____________________________________________________________


// In browsers that doesn't support the File-API, 
// it doesn't make sense to have a "save-as" button.
initializeSaveAsVisibility()
function initializeSaveAsVisibility() {
	if (!supportsFileAPI()) {
		var btnSave = document.getElementById("btn-save");
		btnSave.classList.remove("split-main");
		var btnSaveAs = document.getElementById("btn-save-as");
		var saveDropdown = btnSaveAs.closest(".dropdown");
		saveDropdown.style.display = "none";
	}
}
function supportsFileAPI() {
	return false; // For now Photopea doesn't allow the File API for plugins.
	return window.isSecureContext && typeof window.showOpenFilePicker === "function";
}

// Required when the focus is outside the Monaco editor, like the top buttons.
document.addEventListener("keydown", (e) => {
	if (e.ctrlKey && e.key === 'Enter') {
		runCode();
	}
	if (e.ctrlKey && e.shiftKey && e.key.toUpperCase() === 'S') {
		saveFileAs();
		e.stopPropagation();
		e.preventDefault();
	}
	if (e.ctrlKey && e.key.toUpperCase() === 'S') {
		saveFileTry();
		e.stopPropagation();
		e.preventDefault();
	}
	if (e.ctrlKey && e.key.toUpperCase() === 'O') {
		openFileDialogTry();
		e.stopPropagation();
		e.preventDefault();
	}
});
