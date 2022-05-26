class Weather {
  constructor(city, state) {
    this.apiKey = 'c4f6ebe364c24ca0b6ebe364c2fca04c';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.weather.com/v3/location/search?query=${this.city}&locationType=locid&language=en-US&format=json&apiKey=${this.apiKey}`
    );

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
