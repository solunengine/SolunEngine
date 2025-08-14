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

const WebGPURenderer = require('./core/rendering/webgpu_renderer.js');
const si = require('systeminformation');

(async () => {
  const statusElement = document.createElement('h1');

  try {
    const gpuInfo = await si.graphics();
    const gpuName = gpuInfo.controllers.length > 0 ? gpuInfo.controllers[0].model : 'Unknown GPU';

    const renderer = new WebGPURenderer();
    await renderer.initialize(gpuName);

    statusElement.style.color = '#00FF00';
    statusElement.textContent = 'WebGPU Status: SUCCESS!';

  } catch (error) {
    console.error("Critical Error:", error);
    statusElement.style.color = '#FF0000';
    statusElement.textContent = `FATAL ERROR: ${error.message}`;
  }

  document.body.appendChild(statusElement);
})();