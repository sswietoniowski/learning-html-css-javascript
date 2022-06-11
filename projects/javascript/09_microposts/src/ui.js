class UI {
  constructor() {
    this.posts = document.querySelector('#posts');
    this.title = document.querySelector('#title');
    this.body = document.querySelector('#body');
    this.id = document.querySelector('#id');
    this.postSubmit = document.querySelector('.post-submit');
    this.forState = 'add';
  }

  // Show alert
  showAlert(message, className) {
    // Create div
    const div = document.createElement('div');
    // Add class
    div.className = `alert alert-${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.posts-container');
    // Get posts
    const posts = document.querySelector('#posts');
    // Insert alert
    container.insertBefore(div, posts);
    // Timeout after 3 seconds
    setTimeout(() => {
      document.querySelector('.alert').remove();
    }, 3000);
  }

  // Clear fields
  clearFields() {
    this.title.value = '';
    this.body.value = '';
  }

  // Add a new post
  addPost(post) {
    const div = document.createElement('div');
    div.className = 'post-item';
    div.innerHTML = `<h3>${post.title}</h3>
        <p>${post.body}</p>
        <a href="#" class="edit-post">Edit</a>
        <a href="#" class="delete-post">Delete</a>`;
    this.posts.appendChild(div);
  }

  // Show posts
  showPosts(posts) {
    let output = '';

    posts.forEach((post) => {
      output += `
            <div class="card mb-3">
                <div class="card-body">
                <h4 class="card-title">${post.title}</h4>
                <p class="card-text">${post.body}</p>
                <a href="#" class="edit card-link" data-id="${post.id}">
                    <i class="fa fa-pencil"></i>
                </a>
                <a href="#" class="delete card-link" data-id="${post.id}">
                    <i class="fa fa-remove"></i>
                </a>
                </div>
            </div>
            `;
    });

    this.posts.innerHTML = output;
  }
}

export const ui = new UI();
