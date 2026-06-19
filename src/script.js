
let editor;
const definitionFiles = [
     "types/shared/global.d.ts"
    ,"types/shared/JavaScript.d.ts"
    ,"types/shared/PlugPlugExternalObject.d.ts"
    ,"types/shared/ScriptUI.d.ts"
    ,"types/shared/XMPScript.d.ts"
    ,"types/Photoshop/2015.5/index.d.ts"
];

const tsconfigFiles = [
     "types/Photoshop/2015.5/tsconfig.json"
    ,"types/shared/tsconfig.json"
];

require.config({
    paths:{
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
alert("Hello Photopea scripters!");
`,
            language:"javascript",
            automaticLayout:true,
            minimap:{ enabled:true},
            fontSize:14,
            suggestOnTriggerCharacters:true,
            quickSuggestions:true
        }
    );
    await loadTypeDefinitions();
});


// Load .d.ts for Intellisense
async function loadTypeDefinitions() {
    const tsDefaults = monaco.languages.typescript.javascriptDefaults;
    for (const file of definitionFiles) {
        try{
            const response = await fetch(file);
            const text = await response.text();
            tsDefaults.addExtraLib(text, "file:///" + file);
            console.log("Loaded definition:", file);
        }
        catch(e) {
            console.warn("Could not load file", file);
        }
    }

    for(const file of tsconfigFiles) {
        try{
            const response = await fetch(file);
            const json = await response.text();

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


document.getElementById("run").onclick=function() {
    const code = editor.getValue();
    // console.log(code);
    window.parent.postMessage(code, "*");
};


document.getElementById("save").onclick=function() {
    const blob = new Blob([editor.getValue()], { type:"text/javascript" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href=url;
    a.download="script.js";
    a.click();
    URL.revokeObjectURL(url);
};


const fileInput = document.getElementById("fileInput");
document.getElementById("load").onclick=function() {
    fileInput.click();
};

fileInput.onchange=function(e) {
    const file = e.target.files[0];
    loadFile(file);
};


// Drag & Drop
const dropZone = document.getElementById("dropZone");

document.addEventListener("dragover", function(e) {
    e.preventDefault();
    dropZone.classList.add("drag");
});

document.addEventListener("dragleave", function() {
    dropZone.classList.remove("drag");
});

document.addEventListener("drop", function(e) {
    e.preventDefault();
    dropZone.classList.remove("drag");
    const file = e.dataTransfer.files[0];
    if(!file) {
        return;
    }
    const allowed = [
        ".txt",
        ".js",
        ".jsx",
        ".jsxbin"
    ];
    const isAllowedExtension = allowed.some(ext => file.name.toLowerCase().endsWith(ext));
    if(isAllowedExtension) {
        loadFile(file);
    }
});

function loadFile(file) {
    const reader = new FileReader();
    reader.onload=function() {
        editor.setValue(
            reader.result
        );
    };
    reader.readAsText(file);
}
