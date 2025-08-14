class WebGPURenderer {
  constructor() {
    this.adapter = null;
    this.device = null;
  }


  async initialize() {
    if (!navigator.gpu) {
      throw new Error("WebGPU not supported! This should have been caught earlier!");
    }

    this.adapter = await navigator.gpu.requestAdapter();
    if (!this.adapter) {
      throw new Error("No appropriate GPUAdapter found.");
    }


    this.device = await this.adapter.requestDevice();
    if (!this.device) {
      throw new Error("Couldn't get GPUDevice.");
    }

    console.log(`[WebGPU] Renderer initialized successfully. Device handle obtained.`);
    console.log(`[WebGPU]: Using device: ${this.adapter.name}`);

    return true;
  }
}


module.exports = WebGPURenderer;