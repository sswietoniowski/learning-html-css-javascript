// old way of doing things
document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create an XHR Object
  var xhr = new XMLHttpRequest();

  // OPEN
  xhr.open('GET', '19_xhr_object_and_text.txt', true);

  //   Newer syntax
  xhr.onload = function () {
    if (this.status == 200) {
      console.log(this.responseText);
      document.getElementById(
        'output'
      ).innerHTML = `<h1>${this.responseText}</h1>`;
    }
  };

  // Older syntax
  //   xhr.onreadystatechange = function () {
  //     if (this.readyState == 4 && this.status == 200) {
  //       console.log(this.responseText);
  //       document.getElementById('output').innerHTML = this.responseText;
  //     }
  //   };

  // Optional - used for spinners/loaders
  xhr.onprogress = function () {
    console.log('READYSTATE', xhr.readyState);
  };

  xhr.onerror = function () {
    console.log('Request Error...');
  };

  xhr.send();

  // readyState values
  // 0: request not initialized
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready

  // HTTP Statuses
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"
}
