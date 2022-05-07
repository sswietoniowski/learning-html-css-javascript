const http = new easyHttpWithXhrAndCallbacks();

// Get Posts
http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {
  console.log('Get Posts');
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});

// Get Post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, posts) {
//   console.log('Get Post');
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// Create Post
// http.post(
//   'https://jsonplaceholder.typicode.com/posts',
//   {
//     title: 'Post Title',
//     body: 'Post Body',
//     userId: 1,
//   },
//   function (err, posts) {
//     console.log('Post Post');
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(posts);
//     }
//   }
// );

// Update Post
// http.put(
//   'https://jsonplaceholder.typicode.com/posts/1',
//   {
//     title: 'Post Title',
//     body: 'Post Body',
//     userId: 1,
//   },
//   function (err, posts) {
//     console.log('Update Post');
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(posts);
//     }
//   }
// );

// Delete Post
// http.delete(
//   'https://jsonplaceholder.typicode.com/posts/1',
//   function (err, posts) {
//     console.log('Delete Post');
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(posts);
//     }
//   }
// );
