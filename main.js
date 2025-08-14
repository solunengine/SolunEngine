const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {

      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js')

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