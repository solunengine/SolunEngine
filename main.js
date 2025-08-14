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

const { app, BrowserWindow } = require('electron');
const path = require('path');


function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile('index.html');

  if (process.env.NODE_ENV !== 'production') {
    win.webContents.openDevTools();
  }
}

app.whenReady().then(createWindow);

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});