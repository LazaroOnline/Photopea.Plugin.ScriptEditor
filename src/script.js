
var editor;
var files = []; // { id, name, dirty, model, viewState, handle }
var activeId = null;

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

var fileExtensionsAllowed = [
	 ".txt"
	,".js"
	,".jsx"
	,".jsxinc"
	,".jsxbin"
];

var demos = {
	 script: {}
	,hello: {}
	,processLayers: {}
	,processCloneLayers: {}
};

document.getElementById("btn-run").onclick = runCode;
document.getElementById("btn-save").onclick = saveFileTry;
document.getElementById("btn-save-as").onclick = saveFileAsClick;
document.getElementById("btn-load").onclick = openFileDialogTry;
document.getElementById("btn-new-tab").onclick = newBlankTab;

document.getElementById("btn-demo-hello").onclick = () => createFileFromDemo("hello");
document.getElementById("btn-demo-process-layers").onclick = () => createFileFromDemo("processLayers");
document.getElementById("btn-demo-clone-layers").onclick = () => createFileFromDemo("processCloneLayers");

// _____________________________________________________________

// Editor

require.config({
	paths: {
		vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.52.0/min/vs"
	}
});

require(["vs/editor/editor.main"], createEditor);

async function createEditor() {
	monaco.editor.defineTheme("my-vscode-dark",{
		base: "vs-dark",
		inherit: true,
		rules: [],
		colors: {
			"editor.background":"#1e1e1e"
		}
	});
	monaco.editor.setTheme("my-vscode-dark");

	// Load persisted files from local-storage:
	var persisted = loadPersisted();
	var startFile;
	var hasPersistedFiles = persisted && persisted.files && persisted.files.length;
	if (hasPersistedFiles) {
		for (var persistedFile of persisted.files) {
			createFile(persistedFile.name, persistedFile.content, {
				 id: persistedFile.id
				,dirty: persistedFile.dirty
				,lastSavedContent: persistedFile.lastSavedContent
			});
		}
		startFile = findFile(persisted?.activeId);
		if (startFile == null) {
			startFile = files[0];
		}
	}
	if (startFile == null) {
		var defaultContent = await getDemo("script");
		startFile = createFile("script.jsx", defaultContent, { dirty: false });
	}
	setActiveTab(startFile.id);

	var monacoElement = document.getElementById("editor");
	var editorOptions = {
		//  value: editorValue
		 language: "javascript"
		,model: startFile?.model
		,automaticLayout: true
		,minimap: { enabled: false}
		//,fontFamily: "'Cascadia Code', 'Fira Code', ui-monospace, Consolas, monospace"
		//,theme: "vs-dark"
		,fontSize: 12
		,suggestOnTriggerCharacters: true
		,quickSuggestions: true
		,scrollBeyondLastLine: false
		,glyphMargin: false		 // Hide breakpoints margin
		,lineDecorationsWidth: 0 // Reduce decoration space
		,lineNumbersMinChars: 3
		,wordWrap: "on"
	};
	editor = monaco.editor.create(monacoElement, editorOptions);
	editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, runCode);
	editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KeyS, saveFileAs);
	editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, saveFileTry);
	editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyO, openFileDialogTry);
	// Ctrl+N, Ctrl+W are reserved by the browser, no way to override, so we add ALT to the combination.
	editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.KeyN, newBlankTab);
	editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.KeyW, closeCurrentFile);
	editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.Tab, selectNextTab);
	editor.onDidFocusEditorWidget(closeAllDropdowns);

	// var model = monaco.editor.createModel(editorValue, "javascript", monaco.Uri.parse("file:///types/Photoshop/2015.5/index.d.ts"));
	// editorSetModelDebounced(model);

	var model = editor.getModel();
	// model.onDidChangeContent(() => persistDebounced());
	monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
		target: monaco.languages.typescript.ScriptTarget.ES3,
		allowNonTsExtensions: true,
		noLib: true // "noLib" excludes the default browser/ES2015+ globals (fetch, document, Promise, etc) so suggestions only reflect what actually exists in ExtendScript.
	});
	await loadTypeDefinitions();
	// await loadTsConfigFiles();

	// editor.setValue(startFile.model.getValue());
	renderTabs();
}

// Required when the focus is outside the Monaco editor, like the top buttons.
document.addEventListener("keydown", (e) => {
	if (e.ctrlKey && e.key === "Enter") { runCode(); }
	if (e.ctrlKey && e.shiftKey && e.key.toUpperCase() === "S") { handleEvent(e, saveFileAs); }
	if (e.ctrlKey && e.key.toUpperCase() === "S") { handleEvent(e, saveFileTry); }
	if (e.ctrlKey && e.key.toUpperCase() === "O") { handleEvent(e, openFileDialogTry); }
	if (e.ctrlKey && e.altKey && e.key.toUpperCase() === "N") { handleEvent(e, newBlankTab); }
	if (e.ctrlKey && e.altKey && e.key.toUpperCase() === "W") { handleEvent(e, closeCurrentFile); }
	// Leave the Shift+Tab for the usual navigation when the focus is outside the editor:
	// if (e.shiftKey && e.key.toUpperCase() === "TAB") { handleEvent(e, selectNextTab); }
});

function handleEvent(e, action) {
	var result = action();
	// console.log("keydown from global document");
	e.stopPropagation();
	e.preventDefault();
	return result;
}

// Load .d.ts for Intellisense
async function loadTypeDefinitions_FromBundle() {
	var psTypeDefinitionsUrl = "types/photoshop-bundle.d.ts";
	var psTypeDefinitions = await fetchText(psTypeDefinitionsUrl);
	var virtualFilePath = "file:///photoshop-extendscript.d.ts";
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
	// var code = getCurrentTabFile().model.getValue(); // another option, same result.
	// console.log(code);
	window.parent.postMessage(code, "*");
}

// _____________________________________________________________

// Save

async function saveFileAsClick() {
	await saveFileAs();
	closeAllDropdowns();
}

async function saveFileAs() {
	try {
		await saveFileV2(true);
	} catch (ex) {
		if (isAbort(ex)) {
			return;
		}
		// console.log(ex);
		saveFileV1(true);
	}
}

async function saveFileTry() {
	try {
		await saveFileV2();
	} catch (ex) {
		if (isAbort(ex)) {
			return;
		}
		// console.log(ex);
		saveFileV1();
	}
}
async function saveFileV2(forceAs = false) {
	var editorTabFile = getCurrentTabFile();
	if (!editorTabFile) return;
	var content = editorTabFile.model.getValue();

	if (editorTabFile.handle && !forceAs) {
		await saveFileHandle(editorTabFile.handle, content);
		markSaved(editorTabFile);
		return;
	}
	var handle = await window.showSaveFilePicker({
		suggestedName: editorTabFile.name,
		types: [{ description: "ExtendScript", accept: { "text/javascript": fileExtensionsAllowed } }]
	});
	editorTabFile.handle = handle;
	editorTabFile.name = handle.name;
	await saveFileHandle(handle, content);
	markSaved(editorTabFile);
}

async function saveFileHandle(fileHandle, content) {
	var writable = await fileHandle.createWritable();
	await writable.write(content);
	await writable.close();
}

function saveFileV1(forceAs = false) {
	var editorTabFile = getCurrentTabFile();
	if (!editorTabFile) return;
	var content = editorTabFile.model.getValue();

	// Fallback for browsers without File System Access support: 
	// There is no way to write back to an arbitrary local file, 
	// so this always produces a download.
	// "Save As" at least lets you pick a different filename.
	console.log("Saving script file...");
	var name = editorTabFile.name;
	if (forceAs) {
		var picked = window.prompt("Save as filename:", editorTabFile.name);
		if (!picked) {
			return;
		}
		name = picked;
		editorTabFile.name = picked;
	}
	downloadAsFile(name, content);
	markSaved(editorTabFile);
}

function downloadAsFile(name, content) {
	var blob = new Blob([content], { type: "text/javascript" });
	var url = URL.createObjectURL(blob);
	var a = document.createElement("a");
	a.href = url;
	a.download = name;
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
	URL.revokeObjectURL(url);
}

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
// File API only exist in Chromium as of 2026,
// Firefox deliberately won't implement it, 
// and Safari hasn't implemented it without any statements.
function supportsFileAPI() {
	return false; // For now Photopea doesn't allow the File API for plugins.
	// return window.isSecureContext && typeof window.showOpenFilePicker === "function";
}

function isAbort(err) {
	return err && err.name === "AbortError";
}

// _____________________________________________________________

// Open

async function openFileDialogTry() {
	try {
		await openFileDialogV2();
	} catch (ex) {
		if (isAbort(ex)) {
			return;
		}
		// console.log(ex);
		await openFileDialogV1();
	}
}
async function openFileDialogV2() {
	var fileHandles = await window.showOpenFilePicker({
		excludeAcceptAllOption: false,
		multiple: true,
		types: [{
			description: "Text files and scripts", // "ExtendScript"
			accept: { "text/javascript": fileExtensionsAllowed }
		}],
	});
	for (var handle of fileHandles) {
		await loadFileFromHandle(handle);
	}
}

async function loadFileFromHandle(fileHandle) {
	var existingTab = await getExistingEditorFile(fileHandle);
	if (existingTab != null) {
		console.log(`The file was already opened: "${fileHandle.name}"`);
		activateFile(existingTab);
		return;
	}
	var file = await fileHandle.getFile();
	var fileContent = await file.text();
	var editorTabFile = createFileAndFocus(fileHandle.name, fileContent, { dirty: false, handle: fileHandle });
}

async function getExistingEditorFile(fileHandle) {
	try {
		for (var file of files) {
			if (file.handle != null) {
				if (await fileHandle.isSameEntry(file.handle)) {
					return file;
				}
			}
		}
	} catch (ex) {
		console.error(`Error checking existing file handles for "${fileHandle?.name}"`, ex);
		return null;
	}
	return null;
}

var fileInput = document.getElementById("fileInput");
function openFileDialogV1() {
	fileInput.click();
}

fileInput.onchange = (e) => {
	for (var file of e.target.files) {
		loadFile(file);
	}
	e.target.value = "";
}

function loadFile(file) {
	if (!file) return;
	var reader = new FileReader();
	reader.onload = function () {
		// setEditorContent(reader.result);
		// editor.setValue(reader.result);
		var editorTabFile = createFileAndFocus(file.name, String(reader.result), { dirty: false });
	};
	reader.readAsText(file);
}

async function createFileFromDemo(demoName) {
	var demoContent = await getDemo(demoName);
	var editorTabFile = createFileAndFocus(demoName + ".jsx", demoContent, { dirty: false });
}

async function getDemo(demoName) {
	var demo = demos[demoName];
	if (demo == null) {
		return;
	}
	if (demo.content == null) {
		demo.content = await fetchText(`demos/${demoName}.jsx`);
	}
	return demo.content;
}

// Unlike "editor.setValue()" this preserves document history:
function setEditorContent(newText) {
	var model = editor.getModel();
	editor.pushUndoStop();
	editor.executeEdits("replace-doc", [{
		range: model.getFullModelRange(),
		text: newText
	}]);
	editor.pushUndoStop();
}

// _____________________________________________________________

// LocalStorage persistence

var persistTimer = null;
var autoSaveMaxMs = 400;
var scriptAutoSaveLocalStorageKey = "script_auto_save";

function persistNow() {
	try {
		var data = {
			activeId: activeId,
			files: files.map(fileToJson)
		};
		localStorage.setItem(scriptAutoSaveLocalStorageKey, JSON.stringify(data));
	} catch (e) {
		console.warn("Could not persist editor state:", e);
	}
}

function fileToJson(f) {
	try {
		return {
			 id: f.id
			,name: f.name
			,dirty: f.dirty
			,content: f.model.getValue()
			,lastSavedContent: f.lastSavedContent
		};
	} catch (e) {
		console.warn("Could not persist editor state:", e);
	}
}

function persistDebounced() {
	clearTimeout(persistTimer);
	persistTimer = setTimeout(persistNow, autoSaveMaxMs);
}

function loadPersisted() {
	try {
		var raw = localStorage.getItem(scriptAutoSaveLocalStorageKey);
		return raw ? JSON.parse(raw) : null;
	} catch (e) {
		console.warn("Could not read persisted editor state:", e);
		return null;
	}
}

// _____________________________________________________________

// File-model management

function createFileAndFocus(name, content, opts) {
	var editorTabFile = createFile(name, content, opts);
	activateFile(editorTabFile);
	persistNow();
	return editorTabFile;
}
function createFile(name, content, opts) {
	opts = opts || {};
	var id = opts.id || uid();
	var url = `inmemory://editor/${id}.jsx`;
	var model = monaco.editor.createModel(content, "javascript", monaco.Uri.parse(url));
	var lastSavedContent = opts.lastSavedContent ?? "";
	if (!opts.dirty) {
		lastSavedContent = content;
	}
	var file = {
		id: id,
		name: name,
		dirty: !!opts.dirty,
		lastSavedContent: lastSavedContent,
		model: model,
		viewState: null,
		handle: opts.handle || null
	};
	model.onDidChangeContent(function () {
		autoSetDirty(file);
		// if (!file.dirty) { setDirty(file, true); }
		persistDebounced();
	});
	files.push(file);
	addNewTab(file);

	return file;
}

function activateFileById(id) {
	var file = findFile(id);
	activateFile(file);
}
function activateFile(file) {
	if (!file || !editor) {
		return;
	}
	if (activeId) {
		var prev = getCurrentTabFile();
		if (prev) {
			prev.viewState = editor.saveViewState();
		}
	}
	setActiveTab(file.id);
	editorSetModelDebounced(file.model);
	if (file.viewState) {
		editor.restoreViewState(file.viewState);
	}
	editor.focus();
	//renderTabs();
	persistNow();
}

var editorSetModelTimer;
var editorSetModelMaxMs = 90;
// Changing model too fast would produce an error in Monaco editor in DevTools console:
// "async.ts:285 Uncaught (in promise) Canceled: Canceled"
function editorSetModelDebounced(model) {
	clearTimeout(editorSetModelTimer);
	editorSetModelTimer = setTimeout(()=> editor.setModel(model), editorSetModelMaxMs);
}

function getNextTabIndex() {
	var currentFileIndex = files.findIndex(f => f.id === activeId);
	var nextFileIndex = currentFileIndex + 1;
	var isLastFile = nextFileIndex >= files.length;
	if (isLastFile) {
		nextFileIndex = 0;
	}
	return nextFileIndex;
}

function selectNextTab() {
	var nextFileIndex = getNextTabIndex();
	var nextFile = files[nextFileIndex];
	activateFile(nextFile);
}

function closeCurrentFile() {
	closeFileById(activeId);
}

function closeFileById(id) {
	var file = findFile(id);
	closeFile(file);
}

function closeFile(file) {
	if (!file) {
		return;
	}
	if (file.dirty) {
		var userConfirm = window.confirm(`Discard unsaved changes in "${file.name}"?`);
		if (!userConfirm) {
			return;
		}
	}
	var idx = files.indexOf(file);
	var wasActive = (activeId === file.id);
	var replacement = null;

	if (files.length === 1) {
		replacement = createFile(nextUntitledName(), "", { dirty: false });
	} else if (wasActive) {
		replacement = files[idx + 1] || files[idx - 1];
	}

	if (wasActive && replacement) {
		setActiveTab(replacement.id);
		editorSetModelDebounced(replacement.model);
		replacement.viewState = null;
	}

	files.splice(files.indexOf(file), 1);
	file.model.dispose();

	removeTabByFileId(file.id);
	persistNow();
}

function newBlankTab() {
	var editorTabFile = createFileAndFocus(nextUntitledName(), "", { dirty: false });
}

function markSaved(file) {
	setDirty(file, false);
	file.lastSavedContent = file.model.getValue();
	persistNow();
}

function uid() {
	return "f" + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}
function getCurrentTabFile() {
	return findFile(activeId)
}
function findFile(id) {
	return files.find(f => f.id === id) ?? null;
}

function nextUntitledNumber() {
	var number = 0;
	var alreadyExist = false;
	do {
		number++;
		alreadyExist = files.some(f => f.name == getUntitledFileName(number));
	} while (alreadyExist);
	return number;
}

function nextUntitledName() {
	var nextNumber = nextUntitledNumber();
	var name = getUntitledFileName(nextNumber);
	return name;
}

function getUntitledFileName(num) {
	return `Untitled-${num}.jsx`;
}

function renderTabs() {
	var container = document.getElementById("tabs");
	container.ondblclick = newBlankTab;
	container.innerHTML = "";
	for (var file of files) {
		addNewTab(file);
	}
}
function addNewTab(file) {
	var template = document.getElementById("template-tab");
	var clone = template.content.cloneNode(true);
	var tab = clone.querySelector(".tab");
	tab.id = file.id;
	if (file.id === activeId) {
		setIsActiveTab(tab, true);
	}
	setDirtyTab(tab, file.dirty);
	var label = tab.querySelector(".tab-label");
	label.textContent = file.name;
	tab.title = file.name;

	tab.onclick = () => activateFile(file);
	onMiddleClick(tab, () => closeFile(file));
	var close = tab.querySelector(".tab-close");
	close.addEventListener("click", function (e) {
		e.stopPropagation();
		closeFile(file);
	});
	var container = document.getElementById("tabs");
	container.appendChild(tab);
}

function removeTabByFileId(fileId) {
	var tab = getTabByFileId(fileId);
	tab.remove();
}
function getTabByFileId(fileId) {
	return document.getElementById(fileId);
}
function autoSetDirty(file) {
	var currentContent = file.model.getValue();
	var isDirty = file.lastSavedContent != currentContent;
	setDirty(file, isDirty);
}
function setDirty(file, isDirty = true) {
	file.dirty = isDirty;
	setDirtyTabById(file.id, isDirty);
}
function setDirtyTabById(fileId, isDirty = true) {
	var tab = getTabByFileId(fileId);
	setDirtyTab(tab, isDirty);
}
function setDirtyTab(tab, isDirty = true) {
	if (tab == null) {
		return;
	}
	var dirtyClassName = "dirty";
	if (isDirty) {
		tab.classList.add(dirtyClassName);
	} else {
		tab.classList.remove(dirtyClassName);
	}
}
function setActiveTab(fileId) {
	if (activeId == fileId) {
		return;
	}
	setIsActiveTabById(activeId, false);
	setIsActiveTabById(fileId, true);
	activeId = fileId;
}
function setIsActiveTabById(fileId, isActive = true) {
	var tab = getTabByFileId(fileId);
	setIsActiveTab(tab, isActive);
}
function setIsActiveTab(tab, isActive = true) {
	if (tab == null) {
		return;
	}
	var activeClassName = "active";
	if (isActive) {
		tab.classList.add(activeClassName);
	} else {
		tab.classList.remove(activeClassName);
	}
}
function onMiddleClick(element, action) {
	// Using "mousedown" is better than "auxclick",
	// because "auxclick" is not called when there is an active scroll.
	// Where the "mouse-scroll" default feature from the browser takes over.
	// For example when you have many tabs that don't fit the available width.
	// element.addEventListener("auxclick", (e) => {
	element.addEventListener("mousedown", (e) => {
		if (isMiddleClick(e)) {
			action(e);
			e.stopPropagation();
			e.preventDefault();
		}
	});
}

function isMiddleClick(clickEventArgs) {
	return clickEventArgs.button === 1;
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
document.addEventListener("click", closeAllDropdowns);

function initializeDropdowns() {
	var dropdownTriggers = document.querySelectorAll(".dropdown-trigger");
	for (var dropdownTrigger of dropdownTriggers) {
		dropdownTrigger.addEventListener("click", function (e) {
			e.stopPropagation();
			var dropdownContainer = e.target.closest(".dropdown");
			var menu = dropdownContainer.querySelector(".dropdown-menu");
			var wasOpen = menu.classList.contains("open");
			closeAllDropdowns();
			if (!wasOpen) {
				menu.classList.add("open");

				// Auto position to avoid screen borders:
				setStyleLeftSide(menu, false);
				var isOutOfScreenOnTheLeft = menu.getBoundingClientRect().left < 0;
				if (isOutOfScreenOnTheLeft) {
					setStyleLeftSide(menu, true);
					var rect = menu.getBoundingClientRect();
					var isOutOfScreenOnTheRight = rect.right > window.innerWidth;
					if (isOutOfScreenOnTheRight) {
						setStyleLeftSide(menu, false);
					}
				}
			}
		});
	}
}

function setStyleLeftSide(element, left = true) {
	element.style.left = left? "0" : "auto";
	element.style.right = left? "auto" : "0";
}

function closeAllDropdowns() {
	var openMenus = document.querySelectorAll(".dropdown-menu.open");
	for (var openMenu of openMenus) {
		openMenu.classList.remove("open");
	}
}

// _____________________________________________________________
