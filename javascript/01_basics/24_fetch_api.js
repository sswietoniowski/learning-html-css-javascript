document.getElementById('button1').addEventListener('click', getText);

function getText() {
  fetch('24_fetch_api.txt')
    .then(function (res) {
      return res.text();
    })
    .then(function (data) {
      // deepcode ignore DOMXSS: this is just a demo code
      document.getElementById('output').innerHTML = `<h1>${data}</h1>`;
    })
    .catch(function (err) {
      console.log(err);
    });
}

document.getElementById('button2').addEventListener('click', getJSON);

function getJSON() {
  fetch('24_fetch_api.json')
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      // deepcode ignore DOMXSS: this is just a demo code
      document.getElementById('output').innerHTML = `<h1>${data.name}</h1>`;
    })
    .catch(function (err) {
      console.log(err);
    });
}

document.getElementById('button3').addEventListener('click', getExternal);

function getExternal() {
  fetch('https://api.icndb.com/jokes/random')
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      document.getElementById(
        'output'
        // deepcode ignore DOMXSS: this is just a demo code
      ).innerHTML = `<h1>${data.value.joke}</h1>`;
    })
    .catch(function (err) {
      console.log(err);
    });
}
