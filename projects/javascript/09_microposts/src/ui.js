class UI {
  constructor() {
    this.posts = document.querySelector('#posts');
    this.title = document.querySelector('#title');
    this.body = document.querySelector('#body');
    this.id = document.querySelector('#id');
    this.postSubmit = document.querySelector('.post-submit');
    this.forState = 'add';
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
