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
