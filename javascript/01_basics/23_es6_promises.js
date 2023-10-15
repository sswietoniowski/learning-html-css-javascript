const posts = [
  { title: 'Post 1', body: 'This is post 1' },
  { title: 'Post 2', body: 'This is post 2' },
];

function createPost(post) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      posts.push(post);
      let error = false;

      if (!error) {
        resolve();
      } else {
        reject('Error: Something went wrong');
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function () {
    let output = '';
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: 'Post 3', body: 'This is post 3' })
  .then(getPosts)
  .catch((error) => {
    console.log(error);
  });

// Concurrent promises

const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 2000, 'Goodbye');
});
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(
  (res) => res.json()
);

Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
  console.log(values)
);

Promise.any([promise1, promise2, promise3, promise4]).then((values) =>
  console.log(values)
);

Promise.race([promise1, promise2, promise3, promise4]).then((values) =>
  console.log(values)
);
