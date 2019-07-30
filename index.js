const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let mainWindow = null;

app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("ready", function () {
    mainWindow = new BrowserWindow({ width: 890, height: 1000 });
    mainWindow.loadURL("file://" + __dirname + "/index.html");
    mainWindow.openDevTools();
    mainWindow.on("closed", function () {
        mainWindow = null;
    });
});