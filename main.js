const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

// Import the renderer from its correct, lowercase path.
const VulkanRenderer = require('./core/rendering/vulkan_init.js');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadFile('index.html');

  if (process.env.NODE_ENV !== 'production') {
    win.webContents.openDevTools();
  }
}

ipcMain.handle('get-app-version', () => {
  return app.getVersion();
});

app.whenReady().then(() => {
  // Attempt to initialize the core rendering subsystem first.
  if (VulkanRenderer.initialize()) {
    createWindow();
  } else {
    // If the renderer fails, the application is not viable.
    console.error('[App]: FATAL: Renderer subsystem failed to initialize. Aborting.');
    app.quit();
  }
});

app.on('activate', () => {
  // Handle macOS dock icon behavior.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.on('window-all-closed', () => {
  // Quit the app when all windows are closed (non-macOS).
  if (process.platform !== 'darwin') {
    app.quit();
  }
});