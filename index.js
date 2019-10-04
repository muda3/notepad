const { app, BrowserWindow, systemPreferences } = require("electron");

let win;
function createWindow() {
  win = new BrowserWindow({
    width: 890,
    height: 1000,
    transparent: false,
    backgroundColor: "#0c0c25",

    //titleBarStyle: "hiddenInset",
    //resizable: false,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile("index.html");
  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
