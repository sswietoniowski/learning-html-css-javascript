class Weather {
  constructor(city, state) {
    this.apiKey = '5bec2222e7a166b42e6753cb3b5b59bf';
    this.city = city;
    this.state = state;
    this.units = 'metric';
  }

  // Fetch city location
  async getLocation() {
    // docs: https://openweathermap.org/api/geocoding-api
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${this.city},${this.state}&limit=1&appid=${this.apiKey}`
    );
    const data = await response.json();

    if (response.status !== 200) {
      throw new Error(data.message);
    }

    const latitude = data[0].lat;
    const longitude = data[0].lon;

    return { latitude, longitude };
  }

  // Fetch weather from API
  async getWeather() {
    const { latitude, longitude } = await this.getLocation();

    // docs: https://openweathermap.org/current
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${this.units}&appid=${this.apiKey}`
    );
    const data = await response.json();

    if (response.status !== 200) {
      throw new Error(data.message);
    }

    const name = data.name;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
    const temperature = data.main.temp;
    const humidity = data.main.humidity; // %
    const feelsLike = data.main.feels_like; // Celsius
    const wind = data.wind.speed; // meter/sec

    return { name, description, icon, temperature, humidity, feelsLike, wind };
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
