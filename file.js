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
    }, (filenames) => {
        const fs = require('fs');
        const data = document.getElementById("text").value;
        const ntsavefile = new Blob([data], { type: 'text/plain' });
        fs.writeFile(filenames, data, function (err, result) {
            if (err) console.log(err);
        });
    });
};