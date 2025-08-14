// preload.js
const { contextBridge, ipcRenderer } = require('electron');

// Expose a controlled API to the renderer process (the window).
// We are creating a global object 'electronAPI' on the 'window' object.
contextBridge.exposeInMainWorld('electronAPI', {
  getAppVersion: () => ipcRenderer.invoke('get-app-version')
});