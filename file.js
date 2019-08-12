function Open() {
    const dialog = require('electron').remote.dialog;
    const BrowserWindow = require('electron').remote.dialog;
    const fs = require('fs');
    const options = {
        multiSelections: false
    };
    const openfile = dialog.showOpenDialog({
        title: 'Select a text file',
        properties: ['openFile'],
        filters: [
            { name: 'text file', extensions: ['txt'] }
        ]
    }, (filenames) => {
        if (filenames) {
            console.log(filenames);
            readFile(filenames[0]);

        }
    });
}
function readFile(path) {
    const fs = require('fs');
    const input = document.getElementById('text');
    fs.readFile(path, (error, data) => {
        if (error) console.log(error);
        input.value = data.toString();
    });
};

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
        fs.writeFile(filenames, data, function (err, result) {
            if (err) console.log(err);
        });
    });
};