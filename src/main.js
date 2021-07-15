// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')

//console.log(__dirname);

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 900, 
    height: 600,
    webPreferences:{
      nodeIntegration: true,    //开启node模块
      enableRemoteModule: true,  //开启remote模块
      contextIsolation: false   //出现require is not defined的问题,需要再加此设置
    }
  })

  // and load the index.html of the app.
 //mainWindow.webContents.loadFile('./src/index.html')
 mainWindow.loadFile( __dirname + '/index.html')

  // Open the DevTools.
 // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
app.on('ready', () => {
  console.log("Hello Electron!");
 // mainWindow = new BrowserWindow();
 // mainWindow.webContents.loadFile('./src/index.html');
}
)
