
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
        width: 700,
        height: 500
    })
    bmWindow.webContents.loadFile('../scripts/Reverse_complement_DNA_sequences.html');
}
