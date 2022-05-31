// STATE PATTERN

const PageState = function () {
  let currentState = new HomeState(this);

  this.init = function () {
    this.change(new HomeState(this));
  };

  this.change = function (state) {
    currentState = state;
  };
};

const HomeState = function (page) {
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
    <div class="jumbotron">
        <h1 class="display-4">Hello, world!</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4">
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>
  `;
};

const AboutState = function (page) {
  document.querySelector('#heading').textContent = 'About Us';
  document.querySelector('#content').innerHTML = `
    <p>This is about page</p>  
  `;
};

const ContactState = function (page) {
  document.querySelector('#heading').textContent = 'Contact Us';
  document.querySelector('#content').innerHTML = `
    <p>This is contact page</p>
  `;
};

// Instantiate page states
const page = new PageState();

// Initialize the first state
page.init();

// UI variables
const home = document.querySelector('#home');
const about = document.querySelector('#about');
const contact = document.querySelector('#contact');

home.addEventListener('click', (e) => {
  page.change(new HomeState(page));
  e.preventDefault();
});
about.addEventListener(
  'click',
  function () {
    page.change(new AboutState(page));
  },
  false
);
contact.addEventListener(
  'click',
  function () {
    page.change(new ContactState(page));
  },
  false
);
