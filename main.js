const electron = require("electron");
const { app, BrowserWindow, Menu } = electron;

let mainWindow;
function createMainWindow() {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    title: "csv reader",
    width: 2000,
    height: 1000,
  });

  mainWindow.loadFile("./app/index.html");
}

app.on("ready", () => {
  createMainWindow();
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});
