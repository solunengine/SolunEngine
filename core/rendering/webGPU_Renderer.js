/*******************************************************************************
 *
 *   Solun Engine - The ultimate game engine
 *   Copyright (C) 2025 [Solun Engine Programming Team]
 *
 *   This file is part of Solun Engine.
 *
 *   This program is free software; you can redistribute it and/or
 *   modify it under the terms of the MIT License as published by
 *   the Open Source Initiative.
 *
 ******************************************************************************/

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