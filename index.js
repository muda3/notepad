const { app, BrowserWindow, systemPreferences, Menu,isMac,shell } = require("electron");
let win;
const join = require('path').join;
const openAboutWindow = require('about-window').default;
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
const template = [
  // { role: 'appMenu' }
  ...(process.platform === 'darwin' ? [{
    label: app.getName(),
    submenu: [
      { label: 'About App',
        click:() =>
          openAboutWindow({
            icon_path: join(__dirname, 'icon.png'),
            copyright: 'Copyright (c) 2019 muda3',
          })},
      { type: 'separator' },
      { type: 'separator' },
      { role: 'hide' },
      { role: 'hideothers' },
      { role: 'unhide' },
      { type: 'separator' },
      { role: 'quit' }
    ]
  }] : []),
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click: async () => {
          await shell.openExternal('https://github.com/muda3/notepad')
        }
      }
    ]
  }
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)