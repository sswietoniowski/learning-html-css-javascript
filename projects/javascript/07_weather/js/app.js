// Init storage object
const storage = new Storage();

// Get stored location data
const storedLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(storedLocation.city, storedLocation.state);

// Init ui object
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', () => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  // Change location
  weather.changeLocation(city, state);

  // Set new location in LS
  storage.setLocationData(city, state);

  // Get and display weather
  getWeather();

  // Close modal
  $('#loc-modal').modal('hide');
});

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      console.log(results);
      ui.paint(results);
    })
    .catch((error) => {
      console.log(error);
    });
}
