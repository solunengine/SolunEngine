// core/rendering/webgpu_renderer.js
class WebGPURenderer {
  constructor() {
    this.adapter = null;
    this.device = null;
  }

  async initialize(deviceName = 'Unknown Device') {
    if (!navigator.gpu) {
      throw new Error("WebGPU is not supported.");
    }

    this.adapter = await navigator.gpu.requestAdapter({
      powerPreference: 'high-performance'
    });
    if (!this.adapter) {
      throw new Error("No appropriate GPUAdapter could be found.");
    }

    this.device = await this.adapter.requestDevice();
    if (!this.device) {
      throw new Error("Failed to get a GPUDevice.");
    }

    console.log(`[WebGPU] Renderer initialized successfully. Using device: ${deviceName}`);

    return true;
  }
}

module.exports = WebGPURenderer;