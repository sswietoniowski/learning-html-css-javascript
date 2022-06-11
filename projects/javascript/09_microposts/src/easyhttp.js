// Fetch with Async/Await
class EasyHttp {
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

export const http = new EasyHttp();
