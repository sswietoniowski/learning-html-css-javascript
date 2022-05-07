// ES5

// Callbacks

function easyHttpWithXhrAndCallbacks() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET request
easyHttpWithXhrAndCallbacks.prototype.get = function (url, callback) {
  this.http.open('GET', url, true);

  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  };
  this.http.send();
};

// Make an HTTP POST request
easyHttpWithXhrAndCallbacks.prototype.post = function (url, data, callback) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  };
  this.http.send(JSON.stringify(data));
};

// Make an HTTP PUT request
easyHttpWithXhrAndCallbacks.prototype.put = function (url, data, callback) {
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  };
  this.http.send(JSON.stringify(data));
};

// Make an HTTP DELETE request
easyHttpWithXhrAndCallbacks.prototype.delete = function (url, callback) {
  this.http.open('DELETE', url, true);

  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, 'Post Deleted');
    } else {
      callback('Error: ' + self.http.status);
    }
  };
  this.http.send();
};

// Fetch with Promises

class EasyHttpWithFetchAndPromises {
  // Make an HTTP GET request
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  // Make an HTTP POST request
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  // Make an HTTP PUT request
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  // Make an HTTP DELETE request
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
}

// Fetch with Async/Await
class EasyHttpWithFetchAndAsyncAndAwait {
  // Make an HTTP GET request
  async get(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }

  // Make an HTTP POST request
  async post(url, data) {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const resData = await res.json();
    return resData;
  }

  // Make an HTTP PUT request
  async put(url, data) {
    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const resData = await res.json();
    return resData;
  }

  // Make an HTTP DELETE request
  async delete(url) {
    const res = await fetch(url, {
      method: 'DELETE',
    });
    const data = await res.json();
    return data;
  }
}
