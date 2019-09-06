const { app, BrowserWindow, systemPreferences } = require('electron')
let win
function createWindow() {
    win = new BrowserWindow({
        width: 890,
        height: 1000,
        webPreferences: {
            nodeIntegration: true
        }
    })
    systemPreferences.subscribeNotification(
        'AppleInterfaceThemeChangedNotification',
        function theThemeHasChanged() {
            updateMyAppTheme(systemPreferences.isDarkMode())
        }
    )
    win.loadFile('index.html')
    win.webContents.openDevTools()
    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})