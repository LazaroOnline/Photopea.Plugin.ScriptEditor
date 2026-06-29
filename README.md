
# <img src="Icon.png" width="35"/> Photopea.Plugin.ScriptEditor


This is a Photopea.com plugin for writing scripts using VSCode's Monaco editor,  
with autocomplete/intellisense for Photoshop ExtendScripts.




The `d.ts` type files comes from the ['Types-for-Adobe'](https://github.com/docsforadobe/Types-for-Adobe) repository on GitHub.

There is also a ['types-for-adobe extension'](https://marketplace.visualstudio.com/items?itemName=il-harper.vscode-types-for-adobe) available for vscode.


## Using File System API
The "File System API" is currently available only on Chromium browsers.  
Firefox explicitly said they don't want to implement it.  
Safari has not implemented it and has not made any statements.  

Some webs like vscode.dev and Photopea.com uses this API 
to allow the user opening a document and being able to save to that same file after opening it.  
Unlike the old browser workflow that would re-download a new version of the file every time you save.  


For this extension to work in Chromium browsers using the File System API,
it is required that Photopea adds the `allow="file-system-access"` attribute to the plugin's iframe:
```
<iframe src="https://lazaroonline.github.io/Photopea.Plugin.ScriptEditor/src/ScriptEditor.html" allow="file-system-access"></iframe>
```
This can be done by creating a Chrome extension that would modify Photopea to allow it.  
Or by requesting Photopea to enable it at least for a curated list of plugins (like this one).  
Requesting Photopea to allow this on all plugins has been [rejected](https://github.com/photopea/photopea/issues/8838#issuecomment-4754320096) by now.

