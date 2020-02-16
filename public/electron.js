const electron = require("electron")
const path = require("path")
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
  mainWindow = new electron.BrowserWindow({
    width: 1200,
    height: 800
  })
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }
  mainWindow.on('closed', () => mainWindow = null);
}

electron.app.on('ready', createWindow);

electron.app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    electron.app.quit();
  }
});

electron.app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});