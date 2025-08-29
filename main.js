const { app, BrowserWindow } = require("electron");

let mainWindow;

const createMainWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 900,
    minWidth: 1200,
    minHeight: 800,
    maxWidth: 1280,
    maxHeight: 900,
    resizable: false,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  mainWindow.loadURL("https://hogwarts-and-the-hat-project.onrender.com/");

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
};

app.on("ready", createMainWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createMainWindow();
  }
});
