const electron = require("electron");
//const loadDevtool = require('electron-load-devtool');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let mainWindow = null;

app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("ready", function () {
    // ブラウザ(Chromium)の起動, 初期画面のロード
    mainWindow = new BrowserWindow({ width: 890, height: 1000 });
    mainWindow.loadURL("file://" + __dirname + "/index.html");
    //ブラウザの開発者ツールを起動
    // loadDevtool(loadDevtool.REDUX_DEVTOOLS);
    //mainWindow.openDevTools();
    mainWindow.on("closed", function () {
        mainWindow = null;
    });
});

