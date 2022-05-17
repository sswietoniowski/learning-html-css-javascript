// Init GitHub
const github = new GitHub();

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
      } else {
        // Show profile
      }
    });
  } else {
    // Clear profile
  }
});
