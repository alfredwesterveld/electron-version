'use strict';

const {ipcRenderer} = require('electron');

/**
 * Print electron version to stdout via IPC with main electron process and close browser window.
 */
function printElectronVersion() {
    ipcRenderer.send('version', process.versions.electron);
    process.env.STAYOPEN || window.close(); // when STAYOPEN env is set not close browser
}

printElectronVersion();
