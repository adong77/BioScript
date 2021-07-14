
const { remote: { BrowserWindow}, shell } = require('electron');

// console.log("Hi:", __dirname);

const button = document.querySelector('.alert');

button.addEventListener('click', () => {
    alert(__dirname);
});
