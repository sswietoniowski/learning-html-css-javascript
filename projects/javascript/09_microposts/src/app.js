// FIXES: https://dev.to/hulyakarakaya/how-to-fix-regeneratorruntime-is-not-defined-doj
import 'regenerator-runtime/runtime';
import { http } from './easyhttp';
import { ui } from './ui';

// Get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

// Listen for add post
document.querySelector('.post-submit').addEventListener('click', addPost);

// Listen for delete post
document.querySelector('#posts').addEventListener('click', deletePost);

// Listen for edit post
document.querySelector('#posts').addEventListener('click', editPost);

function getPosts() {
  http
    .get('http://localhost:3000/posts')
    .then((data) => {
      ui.showPosts(data);
    })
    .catch((err) => console.log(err));
}

function addPost(e) {
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;

  const post = {
    title,
    body,
  };

  if (title === '' || body === '') {
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    if (ui.forState === 'add') {
      http
        .post('http://localhost:3000/posts', post)
        .then((data) => {
          ui.showAlert('Post added', 'success');
          ui.clearFields();
          getPosts();
        })
        .catch((err) => console.log(err));
    } else {
      http
        .put(`http://localhost:3000/posts/${ui.id.value}`, post)
        .then((data) => {
          ui.showAlert('Post updated', 'success');
          ui.clearFields();
          getPosts();
        })
        .catch((err) => console.log(err));
    }
  }
}

function deletePost(e) {
  e.preventDefault();

  if (e.target.parentElement.classList.contains('delete-post')) {
    const id = e.target.parentElement.dataset.id;
    http
      .delete(`http://localhost:3000/posts/${id}`)
      .then(() => {
        ui.showAlert('Post deleted', 'success');
        getPosts();
      })
      .catch((err) => console.log(err));
  }
}

function editPost(e) {
  e.preventDefault();

  if (e.target.parentElement.classList.contains('edit-post')) {
    ui.forState = 'edit';
    const id = e.target.parentElement.dataset.id;
    http
      .get(`http://localhost:3000/posts/${id}`)
      .then((data) => {
        ui.showEditState(data);
      })
      .catch((err) => console.log(err));
  } else if (e.target.parentElement.classList.contains('update-post')) {
    const id = e.target.parentElement.dataset.id;
    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;
    const post = {
      title,
      body,
    };
    http
      .put(`http://localhost:3000/posts/${id}`, post)
      .then((data) => {
        ui.showAlert('Post updated', 'success');
        ui.clearFields();
        getPosts();
      })
      .catch((err) => console.log(err));
  } else {
    ui.clearFields();
    ui.forState = 'add';
  }
}
