'use strict';

const {app, BrowserWindow, ipcMain} = require('electron');
let mainWindow = null; // Keep reference to prevent GC. See Electron documentation.

/**
 * IPC with electron renderer about electron version.
 */
ipcMain.on('version', (event, message) => {
    process.stdout.write(message);
    process.stdout.write('\n'); // flush buffer
});

/**
 * Create Browser(Renderer) window.
 */
function createWindow() {
    mainWindow = new BrowserWindow({
        show: process.env.SHOW || false
    });
    
    !process.env.PRODUCTION && mainWindow.webContents.openDevTools(); // Only show devtools during development.
    mainWindow.loadURL(`file://${__dirname}/version.html`);
}

app.on('ready', createWindow);
