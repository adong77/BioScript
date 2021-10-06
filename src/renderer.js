
const {  remote: { BrowserWindow}, ipcRenderer, shell } = require('electron');

console.log("Hi:", __dirname);

//Button
const button = document.querySelector('.alert');

button.addEventListener('click', () => {
    alert(__dirname);
});


// demo window
const demoWindow = document.querySelector('.demo-window')

demoWindow.onclick = function () {
    dmWindow = new BrowserWindow({
        width: 800,
        height: 600
    })
    dmWindow.webContents.loadFile(__dirname + '../scripts/Reverse_complement_DNA_sequences.html');
    //dmWindow.webContents.loadFile('../scripts/Reverse_complement_DNA_sequences.html');
}

//open explorer to open html
const allA = document.querySelectorAll('a')
allA.forEach(item => {
    item.onclick = function(e){
        e.preventDefault();
        shell.openExternal(item.href)
    }
})


ipcRenderer.on("reverse", () => {
    document.querySelector(".reverse").click();
})