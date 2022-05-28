// Init weather object
const weather = new Weather('San Francisco', 'CA');

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
  weather
    .getWeather()
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

// const humidity = `${data.main.humidity}%`; // %
// const feelsLike = `${data.main.feels_like} &#8451;`; // Celsius
// const wind = `${data.wind.speed} m/s`; // meter/sec
