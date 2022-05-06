const posts = [
  { title: 'Post 1', body: 'This is post 1' },
  { title: 'Post 2', body: 'This is post 2' },
];

// Synchronous code

// function createPost(post) {
//   setTimeout(function () {
//     posts.push(post);
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(function () {
//     let output = '';
//     posts.forEach((post) => {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({ title: 'Post 3', body: 'This is post 3' });

// getPosts();

// Asynchronous code

function createPost(post, callback) {
  setTimeout(function () {
    posts.push(post);
    callback();
  }, 2000);
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

createPost({ title: 'Post 3', body: 'This is post 3' }, getPosts);
