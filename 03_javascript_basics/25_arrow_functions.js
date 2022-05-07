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
