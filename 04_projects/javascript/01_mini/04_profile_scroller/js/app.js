// Sample data
const profilesData = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingFor: 'female',
    location: 'Boston, MA',
    image: 'http://randomuser.me/api/portraits/men/82.jpg',
  },
  {
    name: 'Jane Doe',
    age: 22,
    gender: 'female',
    lookingFor: 'male',
    location: 'New York, NY',
    image: 'http://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    name: 'Jen Smith',
    age: 26,
    gender: 'female',
    lookingFor: 'male',
    location: 'Boston, MA',
    image: 'http://randomuser.me/api/portraits/women/82.jpg',
  },
  {
    name: 'William Johnson',
    age: 38,
    gender: 'male',
    lookingFor: 'female',
    location: 'Boston, MA',
    image: 'http://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    name: 'Jill Smith',
    age: 32,
    gender: 'female',
    lookingFor: 'female',
    location: 'Boston, MA',
    image: 'http://randomuser.me/api/portraits/women/15.jpg',
  },
  {
    name: 'John Smith',
    age: 20,
    gender: 'male',
    lookingFor: 'male',
    location: 'Boston, MA',
    image: 'http://randomuser.me/api/portraits/men/15.jpg',
  },
];

// Profiles iterator
function profilesIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}

// Profiles generator
function* profilesGenerator(profiles) {
  for (const profile of profiles) {
    yield profile;
  }
}

// const profiles = profilesIterator(profilesData);
const profiles = profilesGenerator(profilesData);

// Next profile display
function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById('profile-display').innerHTML = `
          <ul class="list-group">
              <li class="list-group-item">Name: ${currentProfile.name}</li>
              <li class="list-group-item">Age: ${currentProfile.age}</li>
              <li class="list-group-item">
                  Location: ${currentProfile.location}
              </li>
              <li class="list-group-item">
                  Looking for: ${currentProfile.lookingFor}
              </li>
          </ul>
          `;
    document.getElementById('image-display').innerHTML = `
          <img src="${currentProfile.image}">
          `;
  } else {
    // No more profiles
    window.location.reload();
  }
}

// Call 1st profile
nextProfile();

// Next event
document.getElementById('next').addEventListener('click', nextProfile);
