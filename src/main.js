// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain } = require('electron');
const config = require('../config');
try {
	require('electron-reloader')(module);
} catch {}

// const path = require('path');
//console.log(__dirname);
// const startServer = require('./server');
const httpServer = require('http-server');


//为免被垃圾回收，把mainWindow声明为一个变量
let mainWindow = null;

// Create the browser window.
function createWindow () {
   const mainWindow = new BrowserWindow({
    width: 900, 
    height: 600,
    webPreferences:{
      // preload: path.join(__dirname,'renderer.js'),
      webSecurity: false,
      nodeIntegration: true,    //开启node模块
      enableRemoteModule: true,  //开启remote模块
      contextIsolation: false   //出现require is not defined的问题,需要再加此设置
    }
  });

  // and load the index.html of the app.
 //mainWindow.webContents.loadFile('./src/index.html');
  mainWindow.loadFile( __dirname + '/index.html')
 //mainWindow.loadURL('http://www.ligene.cn/bioscript');
 
 //不同环境加载不同的URL
  // if(is.development){
  //   // mainWindow.loadURL(config.LOCAL_WEB_URL);
  //   mainWindow.loadFile( __dirname + '/index.html')
  // }else{
  //   // mainWindow.loadURL(config.PRODUCTION_WEB_URL);
  //   mainWindow.loadFile( __dirname + '/index.html')
  // }
  
  // 在开发者模式下Open the DevTools.
  // if(is.development){
  //   mainWindow.webContents.openDevTools();
  // }
  // mainWindow.on('closed', function(){
  //   mainWindow = null; // 关闭窗口后重置window对象,macOS??
  // });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createWindow()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
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
  //启动HTTP服务器
  httpServer.createServer({root:"./apps"}).listen(8080);
  // httpServer.createServer({root:"./resources/app"}).listen(8080);
})

ipcMain.on('a', (e, data) => {
  console.log(data);
  e.sender.sender('b', 321);
})


