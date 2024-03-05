console.log('Welcome to Console');

const title = document.getElementById('title');
const list = document.getElementById('list');
const button = document.getElementById('button');
const container = document.getElementById('container');

const div = document.createElement('div');
div.innerHTML = '<h1> Hello Guyss </h1>';

const newBtn = document.createElement('button');
newBtn.innerHTML = 'Klik';

button.addEventListener('click', () => {
    container.appendChild(div);
    div.append(newBtn);
})

newBtn.addEventListener('click', () => {
    console.log('clicked');
    title.innerText = 'Hello FSW 1!!!'
    container.removeChild(div);
})