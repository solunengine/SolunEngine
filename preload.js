// preload.js
const { contextBridge } = require('electron');
const path = require('path'); 


const rendererPath = path.join(__dirname, 'core', 'rendering', 'webgpu_renderer.js');
const WebGPURenderer = require(rendererPath);

// Expose a secure, controlled API to the renderer process.
// We are creating a global object 'solunAPI' on the 'window' object.
contextBridge.exposeInMainWorld('solunAPI', {
  WebGPURenderer: WebGPURenderer
});