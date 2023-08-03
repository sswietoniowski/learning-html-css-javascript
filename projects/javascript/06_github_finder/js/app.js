// Init GitHub
const github = new GitHub();

// Init UI
const ui = new UI();

// Search input
const searchUser = document.querySelector('#search-user');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userName = e.target.value;

  if (userName !== '') {
    console.log(`Searching ${userName}`);

    // Make http call
    // file deepcode ignore PromiseNotCaughtGeneral: this is just a demo code
    github.getUser(userName).then((data) => {
      console.log(data);

      if (data.profile.message === 'Not Found') {
        // Show alert
        ui.showAlert('User Not Found!', 'alert alert-danger');
        // Clear profile
      } else {
        // Show profile
        ui.showProfile(data.profile);
        // Show repos
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear profile
    ui.clearProfile();
  }
});
