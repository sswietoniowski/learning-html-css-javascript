document.getElementById('button1').addEventListener('click', getText);

function getText() {
  fetch('25_arrow_functions.txt')
    .then((res) => res.text())
    .then((data) => {
      document.getElementById('output').innerHTML = `<h1>${data}</h1>`;
    })
    .catch((err) => {
      console.log(err);
    });
}

document.getElementById('button2').addEventListener('click', getJSON);

function getJSON() {
  fetch('25_arrow_functions.json')
    .then((res) => res.json())
    .then((data) => {
      document.getElementById('output').innerHTML = `<h1>${data.name}</h1>`;
    })
    .catch((err) => {
      console.log(err);
    });
}

document.getElementById('button3').addEventListener('click', getExternal);

function getExternal() {
  fetch('https://api.icndb.com/jokes/random')
    .then((res) => res.json())
    .then((data) => {
      document.getElementById(
        'output'
      ).innerHTML = `<h1>${data.value.joke}</h1>`;
    })
    .catch((err) => {
      console.log(err);
    });
}

// const sayHello = function() {
//   console.log('Hello');
// }

// One liners don't need curly braces and return
// const sayHello = () => console.log('Hello');

// sayHello();

// Return object
// const sayHello = () => ({msg: 'Hello'});

// Using parameters
// const sayHello = (name) => `Hello ${name}`;

// Arrow functions can be used as callbacks
const users = ['John', 'Mark', 'Jane'];

const nameLengths = users.map((name) => name.length);
