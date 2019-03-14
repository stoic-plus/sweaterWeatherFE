class Forecast {
  constructor(current, hourly, weekly) {
    this.current = current;
    this.hourly = hourly;
    this.weekly = weekly;
  }

  showCurrent() {
    return `
    <div class="current-weather">
      <p class="weather-main">${}</p>
      <p class="weather-main">${}</p>

      <p class="weather-details">53</p>
      <p class="weather-details">Feels like 53</p>
      <p class="weather-details">30% chance of Rain Showers</p>
      <p class="weather-details">Hi 53F Lo 30F</p>
    </div>
    `;
  }
}
