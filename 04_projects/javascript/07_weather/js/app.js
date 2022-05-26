// Init weather object
const weather = new Weather('San Francisco', 'CA');

weather
  .getWeather()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
