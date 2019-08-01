function Save() {
    const dialog = require('electron').remote.dialog;
    const filenames = dialog.showOpenDialog(null, {
        properties: ['openFile'],
        title: 'Select a text file',
        defaultPath: '.',
        filters: [
            { name: 'text file', extensions: ['txt'] }
        ]
    });
}