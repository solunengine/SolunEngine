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
const { contextBridge } = require('electron');
const path = require('path'); 


const rendererPath = path.join(__dirname, 'core', 'rendering', 'webgpu_renderer.js');
const WebGPURenderer = require(rendererPath);

// Expose a secure, controlled API to the renderer process.
// We are creating a global object 'solunAPI' on the 'window' object.
contextBridge.exposeInMainWorld('solunAPI', {
  WebGPURenderer: WebGPURenderer
});