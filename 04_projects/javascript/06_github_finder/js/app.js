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
    github.getUser(userName).then((data) => {
      console.log(data);

      if (data.profile.message === 'Not Found') {
        // Show alert
        ui.showAlert('User Not Found!', 'alert alert-danger');
      } else {
        // Show profile
        ui.showProfile(data.profile);
      }
    });
  } else {
    // Clear profile
    ui.clearProfile();
  }
});
