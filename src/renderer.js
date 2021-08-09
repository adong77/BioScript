
const { remote: { BrowserWindow}, shell } = require('electron');

console.log("Hi:", __dirname);

//Button
const button = document.querySelector('.alert');

button.addEventListener('click', () => {
    alert(__dirname);
});


// new window
const newWindow = document.querySelector('.new-window')

newWindow.onclick = function () {
    bmWindow = new BrowserWindow({
        width: 800,
        height: 600
    })
    bmWindow.webContents.loadFile('./demo.html');
}

//open explorer to open html
const allA = document.querySelectorAll('a')
allA.forEach(item => {
    item.onclick = function(e){
        e.preventDefault();
        shell.openExternal(item.href)
    }
})
