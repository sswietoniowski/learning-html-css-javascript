class UI {
  constructor() {
    this.location = document.querySelector('#w-location');
    this.desc = document.querySelector('#w-desc');
    this.temperature = document.querySelector('#w-temperature');
    this.icon = document.querySelector('#w-icon');
    this.humidity = document.querySelector('#w-humidity');
    this.feelsLike = document.querySelector('#w-feels-like');
    this.wind = document.querySelector('#w-wind');
  }

  paint(weather) {
    const { name, description, icon, temperature, humidity, feelsLike, wind } =
      weather;
    this.location.textContent = name;
    this.desc.textContent = weather.description;
    this.temperature.textContent = `${temperature} °C`;
    this.icon.setAttribute(
      'src',
      `http://openweathermap.org/img/wn/${icon}.png`
    );
    this.humidity.textContent = `Relative Humidity: ${humidity}%`;
    this.feelsLike.textContent = `Feels Like: ${feelsLike} °C`;
    this.wind.textContent = `Wind: ${wind} m/s`;
  }
}
