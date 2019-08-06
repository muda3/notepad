function Open() {
    const dialog = require('electron').remote.dialog;
    const filenames = dialog.showOpenDialog(null, {
        title: 'Select a text file',
        properties: ['openFile'],
        filters: [
            { name: 'text file', extensions: ['txt'] }
        ]
    }, filePaths => {

    });
}

function Save() {
    const dialog = require('electron').remote.dialog;
    const filenames = dialog.showSaveDialog(null, {
        title: 'Select a text file',
        properties: ['saveFile'],
        defaultPath: ".",
        filters: [
            { name: 'Document', extensions: ['txt'] }
        ]
    }, filePaths => {
        const fs = require('fs')
        const savefile = document.getElementById("text").value;
        const ntsavefile = new Blob([savefile], { type: 'text/plain' });
    });
};