const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js') // Preload.js :)
    }
  });

  win.loadFile('index.html');

  // Automatically open DevTools for development builds
  if (process.env.NODE_ENV !== 'production') {
    win.webContents.openDevTools();
  }
}

// Handle the 'get-app-version' request from the preload script.
ipcMain.handle('get-app-version', () => {
  return app.getVersion();
});

app.whenReady().then(createWindow);

// Handle macOS dock icon behavior.
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Quit the app when all windows are closed (non-macOS).
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});