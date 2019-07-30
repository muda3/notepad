window.onload = function Save() {
    const { BrowserWindow, dialog } = require('electron').remote
    const win = BrowserWindow.getFocusedWindow();
    dialog.ShowOpenDialog(
        win, {
            properties: ['openFile', 'openDirectory', 'promptToCreate'],
            title: 'Save File',
            defaultPath: '.',
            filters: [
                { name: 'text file', extensions: ['txt'] }
            ]
        }
    )
}