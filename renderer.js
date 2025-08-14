// renderer.js

const WebGPURenderer = require('./core/rendering/webgpu_renderer.js');

(async () => {
  const renderer = new WebGPURenderer();
  const statusElement = document.createElement('h1');

  try {
    await renderer.initialize();

    statusElement.style.color = '#00FF00';
    statusElement.textContent = 'WebGPU Status: SUCCESS!'; 
    
  } catch (error) {
    console.error("Renderer Initialization Failed:", error);
    statusElement.style.color = '#FF0000';
    statusElement.textContent = `WebGPU Status: FAILED! - ${error.message}`;
  }

  document.body.appendChild(statusElement);
})();