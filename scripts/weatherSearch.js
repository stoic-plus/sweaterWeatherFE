const weatherData = {"currently":{"summary":"Clear","icon":"clear-day","precipProbability":0,"humidity":0.29,"uvIndex":4,"time":1552683441,"temperature":43.32,"apparentTemperature":39.22,"pressure":1025.76,"visibility":4.33,"ozone":326.89,"nearestStormDistance":521,"nearestStormBearing":359},"hourly_forecast":[{"summary":"Clear","icon":"clear-day","precipProbability":0.22,"humidity":0.29,"uvIndex":6,"time":1552680000,"temperature":41.87,"apparentTemperature":37.67,"pressure":1026.49,"visibility":5.09,"ozone":327.22},{"summary":"Clear","icon":"clear-day","precipProbability":0.22,"humidity":0.28,"uvIndex":4,"time":1552683600,"temperature":43.38,"apparentTemperature":39.29,"pressure":1025.72,"visibility":4.29,"ozone":326.88},{"summary":"Clear","icon":"clear-day","precipProbability":0.19,"humidity":0.31,"uvIndex":3,"time":1552687200,"temperature":44.28,"apparentTemperature":40.7,"pressure":1024.98,"visibility":5.08,"ozone":326.35},{"summary":"Clear","icon":"clear-day","precipProbability":0.08,"humidity":0.42,"uvIndex":1,"time":1552690800,"temperature":44.27,"apparentTemperature":41.43,"pressure":1024.65,"visibility":10,"ozone":326.02},{"summary":"Clear","icon":"clear-day","precipProbability":0,"humidity":0.53,"uvIndex":0,"time":1552694400,"temperature":43.17,"apparentTemperature":40.8,"pressure":1024.46,"visibility":10,"ozone":326.81},{"summary":"Clear","icon":"clear-day","precipProbability":0,"humidity":0.61,"uvIndex":0,"time":1552698000,"temperature":40.61,"apparentTemperature":38.94,"pressure":1025.22,"visibility":10,"ozone":329.94},{"summary":"Clear","icon":"clear-night","precipProbability":0,"humidity":0.63,"uvIndex":0,"time":1552701600,"temperature":38.22,"apparentTemperature":38.22,"pressure":1026.74,"visibility":10,"ozone":334.25},{"summary":"Clear","icon":"clear-night","precipProbability":0,"humidity":0.65,"uvIndex":0,"time":1552705200,"temperature":35.98,"apparentTemperature":35.98,"pressure":1027.76,"visibility":10,"ozone":337.4},{"summary":"Clear","icon":"clear-night","precipProbability":0.02,"humidity":0.66,"uvIndex":0,"time":1552708800,"temperature":34.68,"apparentTemperature":34.68,"pressure":1028.55,"visibility":10,"ozone":338.33},{"summary":"Clear","icon":"clear-night","precipProbability":0,"humidity":0.66,"uvIndex":0,"time":1552712400,"temperature":33.89,"apparentTemperature":33.89,"pressure":1029.09,"visibility":10,"ozone":338.11},{"summary":"Clear","icon":"clear-night","precipProbability":0,"humidity":0.66,"uvIndex":0,"time":1552716000,"temperature":33.01,"apparentTemperature":33.01,"pressure":1029.73,"visibility":10,"ozone":338.12},{"summary":"Clear","icon":"clear-night","precipProbability":0,"humidity":0.67,"uvIndex":0,"time":1552719600,"temperature":31.88,"apparentTemperature":31.88,"pressure":1030.54,"visibility":10,"ozone":338.68},{"summary":"Clear","icon":"clear-night","precipProbability":0,"humidity":0.68,"uvIndex":0,"time":1552723200,"temperature":30.77,"apparentTemperature":30.77,"pressure":1031.03,"visibility":10,"ozone":339.37},{"summary":"Clear","icon":"clear-night","precipProbability":0.02,"humidity":0.69,"uvIndex":0,"time":1552726800,"temperature":29.91,"apparentTemperature":29.91,"pressure":1031.42,"visibility":10,"ozone":340.11},{"summary":"Clear","icon":"clear-night","precipProbability":0.01,"humidity":0.7,"uvIndex":0,"time":1552730400,"temperature":29.1,"apparentTemperature":29.1,"pressure":1031.87,"visibility":10,"ozone":341.13},{"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipProbability":0.01,"humidity":0.68,"uvIndex":0,"time":1552734000,"temperature":24.55,"apparentTemperature":24.55,"pressure":1033.56,"visibility":10,"ozone":342.2},{"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipProbability":0.01,"humidity":0.68,"uvIndex":0,"time":1552737600,"temperature":24.23,"apparentTemperature":24.23,"pressure":1033.9,"visibility":10,"ozone":342.85},{"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipProbability":0.01,"humidity":0.68,"uvIndex":0,"time":1552741200,"temperature":25.06,"apparentTemperature":25.06,"pressure":1034.02,"visibility":10,"ozone":342.86},{"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipProbability":0.01,"humidity":0.67,"uvIndex":0,"time":1552744800,"temperature":26.68,"apparentTemperature":26.68,"pressure":1034,"visibility":10,"ozone":342.45},{"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipProbability":0.02,"humidity":0.66,"uvIndex":1,"time":1552748400,"temperature":28.8,"apparentTemperature":28.8,"pressure":1033.52,"visibility":10,"ozone":341.75},{"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipProbability":0,"humidity":0.62,"uvIndex":2,"time":1552752000,"temperature":31.99,"apparentTemperature":28.39,"pressure":1032.35,"visibility":10,"ozone":340.76},{"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipProbability":0,"humidity":0.57,"uvIndex":3,"time":1552755600,"temperature":35.81,"apparentTemperature":31.74,"pressure":1030.77,"visibility":10,"ozone":339.48},{"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipProbability":0,"humidity":0.54,"uvIndex":5,"time":1552759200,"temperature":38.97,"apparentTemperature":34.8,"pressure":1029.3,"visibility":10,"ozone":338.08},{"summary":"Clear","icon":"clear-day","precipProbability":0,"humidity":0.51,"uvIndex":5,"time":1552762800,"temperature":41.49,"apparentTemperature":37.4,"pressure":1027.98,"visibility":10,"ozone":336.55},{"summary":"Clear","icon":"clear-day","precipProbability":0,"humidity":0.48,"uvIndex":5,"time":1552766400,"temperature":43.76,"apparentTemperature":39.89,"pressure":1026.77,"visibility":10,"ozone":334.71},{"summary":"Clear","icon":"clear-day","precipProbability":0,"humidity":0.47,"uvIndex":4,"time":1552770000,"temperature":45.25,"apparentTemperature":41.64,"pressure":1025.79,"visibility":10,"ozone":333.18},{"summary":"Clear","icon":"clear-day","precipProbability":0,"humidity":0.48,"uvIndex":3,"time":1552773600,"temperature":46.23,"apparentTemperature":42.99,"pressure":1025.11,"visibility":10,"ozone":332.17},{"summary":"Clear","icon":"clear-day","precipProbability":0,"humidity":0.5,"uvIndex":1,"time":1552777200,"temperature":46.2,"apparentTemperature":43.29,"pressure":1024.65,"visibility":10,"ozone":331.46},{"summary":"Clear","icon":"clear-day","precipProbability":0,"humidity":0.54,"uvIndex":0,"time":1552780800,"temperature":45.28,"apparentTemperature":42.68,"pressure":1024.69,"visibility":10,"ozone":330.45},{"summary":"Clear","icon":"clear-day","precipProbability":0,"humidity":0.58,"uvIndex":0,"time":1552784400,"temperature":43.12,"apparentTemperature":40.91,"pressure":1025.55,"visibility":10,"ozone":329.03},{"summary":"Clear","icon":"clear-night","precipProbability":0.02,"humidity":0.61,"uvIndex":0,"time":1552788000,"temperature":40.66,"apparentTemperature":40.66,"pressure":1026.84,"visibility":10,"ozone":327.41},{"summary":"Clear","icon":"clear-night","precipProbability":0.03,"humidity":0.64,"uvIndex":0,"time":1552791600,"temperature":38.48,"apparentTemperature":38.48,"pressure":1027.97,"visibility":10,"ozone":325.78},{"summary":"Clear","icon":"clear-night","precipProbability":0.02,"humidity":0.65,"uvIndex":0,"time":1552795200,"temperature":37.01,"apparentTemperature":37.01,"pressure":1028.66,"visibility":10,"ozone":324.25},{"summary":"Clear","icon":"clear-night","precipProbability":0,"humidity":0.65,"uvIndex":0,"time":1552798800,"temperature":35.88,"apparentTemperature":35.88,"pressure":1029.11,"visibility":10,"ozone":322.61},{"summary":"Clear","icon":"clear-night","precipProbability":0,"humidity":0.65,"uvIndex":0,"time":1552802400,"temperature":34.68,"apparentTemperature":34.68,"pressure":1029.54,"visibility":10,"ozone":321.07},{"summary":"Clear","icon":"clear-night","precipProbability":0,"humidity":0.65,"uvIndex":0,"time":1552806000,"temperature":33.25,"apparentTemperature":30.58,"pressure":1029.85,"visibility":10,"ozone":319.83},{"summary":"Clear","icon":"clear-night","precipProbability":0.01,"humidity":0.65,"uvIndex":0,"time":1552809600,"temperature":31.76,"apparentTemperature":28.85,"pressure":1030.09,"visibility":10,"ozone":318.69},{"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipProbability":0.01,"humidity":0.65,"uvIndex":0,"time":1552813200,"temperature":30.47,"apparentTemperature":26.93,"pressure":1030.29,"visibility":10,"ozone":317.75},{"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipProbability":0.01,"humidity":0.66,"uvIndex":0,"time":1552816800,"temperature":28.84,"apparentTemperature":25.33,"pressure":1030.44,"visibility":10,"ozone":316.71},{"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipProbability":0.01,"humidity":0.68,"uvIndex":0,"time":1552820400,"temperature":27.3,"apparentTemperature":23.96,"pressure":1030.5,"visibility":10,"ozone":315.77},{"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipProbability":0.01,"humidity":0.7,"uvIndex":0,"time":1552824000,"temperature":26.49,"apparentTemperature":22.92,"pressure":1030.5,"visibility":10,"ozone":315.04},{"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipProbability":0.01,"humidity":0.69,"uvIndex":0,"time":1552827600,"temperature":27.17,"apparentTemperature":27.17,"pressure":1030.55,"visibility":10,"ozone":314.71},{"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipProbability":0.01,"humidity":0.67,"uvIndex":0,"time":1552831200,"temperature":28.7,"apparentTemperature":28.7,"pressure":1030.6,"visibility":10,"ozone":314.69},{"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipProbability":0.02,"humidity":0.63,"uvIndex":1,"time":1552834800,"temperature":31.49,"apparentTemperature":31.49,"pressure":1030.21,"visibility":10,"ozone":314.56},{"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipProbability":0.02,"humidity":0.58,"uvIndex":2,"time":1552838400,"temperature":35.13,"apparentTemperature":35.13,"pressure":1029.18,"visibility":10,"ozone":314.24},{"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipProbability":0.02,"humidity":0.52,"uvIndex":4,"time":1552842000,"temperature":40.09,"apparentTemperature":37.71,"pressure":1027.72,"visibility":10,"ozone":313.82},{"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipProbability":0.02,"humidity":0.48,"uvIndex":5,"time":1552845600,"temperature":43.8,"apparentTemperature":41.35,"pressure":1026.41,"visibility":10,"ozone":313.49},{"summary":"Clear","icon":"clear-day","precipProbability":0.02,"humidity":0.43,"uvIndex":6,"time":1552849200,"temperature":46.8,"apparentTemperature":44.34,"pressure":1025.44,"visibility":10,"ozone":312.96},{"summary":"Clear","icon":"clear-day","precipProbability":0,"humidity":0.4,"uvIndex":6,"time":1552852800,"temperature":48.75,"apparentTemperature":46.21,"pressure":1024.64,"visibility":10,"ozone":312.53}],"daily_forecast":[{"summary":"Foggy in the morning.","icon":"fog","precipProbability":0.24,"humidity":0.57,"uvIndex":6,"time":1552629600,"precipType":"snow","temperatureHigh":44.28,"temperatureLow":24.23,"apparentTemperatureHigh":41.43,"apparentTemperatureLow":24.23,"temperatureMin":20.78,"temperatureMax":44.28,"apparentTemperatureMax":41.43,"apparentTemperatureMin":14.07},{"summary":"Partly cloudy until afternoon.","icon":"partly-cloudy-day","precipProbability":0.09,"humidity":0.61,"uvIndex":5,"time":1552716000,"precipType":"snow","temperatureHigh":46.23,"temperatureLow":26.49,"apparentTemperatureHigh":43.29,"apparentTemperatureLow":22.92,"temperatureMin":24.23,"temperatureMax":46.23,"apparentTemperatureMax":43.29,"apparentTemperatureMin":24.23},{"summary":"Partly cloudy until afternoon.","icon":"partly-cloudy-day","precipProbability":0.07,"humidity":0.56,"uvIndex":6,"time":1552802400,"precipType":"rain","temperatureHigh":49.84,"temperatureLow":31.24,"apparentTemperatureHigh":47.32,"apparentTemperatureLow":27.93,"temperatureMin":26.49,"temperatureMax":49.84,"apparentTemperatureMax":47.32,"apparentTemperatureMin":22.92},{"summary":"Mostly cloudy throughout the day.","icon":"partly-cloudy-day","precipProbability":0.09,"humidity":0.6,"uvIndex":5,"time":1552888800,"precipType":"rain","temperatureHigh":50.86,"temperatureLow":33.12,"apparentTemperatureHigh":50.86,"apparentTemperatureLow":30.12,"temperatureMin":31.24,"temperatureMax":50.86,"apparentTemperatureMax":50.86,"apparentTemperatureMin":27.93},{"summary":"Mostly cloudy until afternoon.","icon":"partly-cloudy-day","precipProbability":0.11,"humidity":0.59,"uvIndex":6,"time":1552975200,"precipType":"rain","temperatureHigh":53.84,"temperatureLow":34.69,"apparentTemperatureHigh":53.84,"apparentTemperatureLow":30.73,"temperatureMin":33.12,"temperatureMax":53.84,"apparentTemperatureMax":53.84,"apparentTemperatureMin":30.12},{"summary":"Mostly cloudy throughout the day.","icon":"partly-cloudy-day","precipProbability":0.02,"humidity":0.44,"uvIndex":5,"time":1553061600,"precipType":"rain","temperatureHigh":59.72,"temperatureLow":37.8,"apparentTemperatureHigh":59.72,"apparentTemperatureLow":35.04,"temperatureMin":34.69,"temperatureMax":59.72,"apparentTemperatureMax":59.72,"apparentTemperatureMin":30.73},{"summary":"Rain starting in the afternoon, continuing until evening.","icon":"rain","precipProbability":0.81,"humidity":0.64,"uvIndex":4,"time":1553148000,"precipType":"rain","temperatureHigh":49.34,"temperatureLow":37.89,"apparentTemperatureHigh":46.94,"apparentTemperatureLow":34.42,"temperatureMin":37.8,"temperatureMax":49.34,"apparentTemperatureMax":46.94,"apparentTemperatureMin":35.04},{"summary":"Mostly cloudy throughout the day.","icon":"partly-cloudy-day","precipProbability":0.38,"humidity":0.57,"uvIndex":4,"time":1553234400,"precipType":"rain","temperatureHigh":58.18,"temperatureLow":37.04,"apparentTemperatureHigh":58.18,"apparentTemperatureLow":34.62,"temperatureMin":37.89,"temperatureMax":58.18,"apparentTemperatureMax":58.18,"apparentTemperatureMin":34.42}],"today_high":44.28,"today_low":24.23,"today_summary":"Partly cloudy starting tomorrow morning, continuing until tomorrow afternoon.","tonight_summary":"Clear"}



const searchForm = document.getElementById('search-form');
const stateSelect = document.getElementById('state-select');
const weatherSection = document.getElementById('weather');

const states = [
  {
    "name": "Alabama",
    "abbr": "AL"
  },
  {
    "name": "Alaska",
    "abbr": "AK"
  },
  {
    "name": "Arizona",
    "abbr": "AZ"
  },
  {
    "name": "Arkansas",
    "abbr": "AR"
  },
  {
    "name": "California",
    "abbr": "CA"
  },
  {
    "name": "Colorado",
    "abbr": "CO"
  },
  {
    "name": "Connecticut",
    "abbr": "CT"
  },
  {
    "name": "Delaware",
    "abbr": "DE"
  },
  {
    "name": "District of Columbia",
    "abbr": "DC"
  },
  {
    "name": "Florida",
    "abbr": "FL"
  },
  {
    "name": "Georgia",
    "abbr": "GA"
  },
  {
    "name": "Hawaii",
    "abbr": "HI"
  },
  {
    "name": "Idaho",
    "abbr": "ID"
  },
  {
    "name": "Illinois",
    "abbr": "IL"
  },
  {
    "name": "Indiana",
    "abbr": "IN"
  },
  {
    "name": "Iowa",
    "abbr": "IA"
  },
  {
    "name": "Kansas",
    "abbr": "KS"
  },
  {
    "name": "Kentucky",
    "abbr": "KY"
  },
  {
    "name": "Louisiana",
    "abbr": "LA"
  },
  {
    "name": "Maine",
    "abbr": "ME"
  },
  {
    "name": "Maryland",
    "abbr": "MD"
  },
  {
    "name": "Massachusetts",
    "abbr": "MA"
  },
  {
    "name": "Michigan",
    "abbr": "MI"
  },
  {
    "name": "Minnesota",
    "abbr": "MN"
  },
  {
    "name": "Mississippi",
    "abbr": "MS"
  },
  {
    "name": "Missouri",
    "abbr": "MO"
  },
  {
    "name": "Montana",
    "abbr": "MT"
  },
  {
    "name": "Nebraska",
    "abbr": "NE"
  },
  {
    "name": "Nevada",
    "abbr": "NV"
  },
  {
    "name": "New Hampshire",
    "abbr": "NH"
  },
  {
    "name": "New Jersey",
    "abbr": "NJ"
  },
  {
    "name": "New Mexico",
    "abbr": "NM"
  },
  {
    "name": "New York",
    "abbr": "NY"
  },
  {
    "name": "North Carolina",
    "abbr": "NC"
  },
  {
    "name": "North Dakota",
    "abbr": "ND"
  },
  {
    "name": "Ohio",
    "abbr": "OH"
  },
  {
    "name": "Oklahoma",
    "abbr": "OK"
  },
  {
    "name": "Oregon",
    "abbr": "OR"
  },
  {
    "name": "Pennsylvania",
    "abbr": "PA"
  },
  {
    "name": "Rhode Island",
    "abbr": "RI"
  },
  {
    "name": "South Carolina",
    "abbr": "SC"
  },
  {
    "name": "South Dakota",
    "abbr": "SD"
  },
  {
    "name": "Tennessee",
    "abbr": "TN"
  },
  {
    "name": "Texas",
    "abbr": "TX"
  },
  {
    "name": "Utah",
    "abbr": "UT"
  },
  {
    "name": "Vermont",
    "abbr": "VT"
  },
  {
    "name": "Virginia",
    "abbr": "VA"
  },
  {
    "name": "Washington",
    "abbr": "WA"
  },
  {
    "name": "West Virginia",
    "abbr": "WV"
  },
  {
    "name": "Wisconsin",
    "abbr": "WI"
  },
  {
    "name": "Wyoming",
    "abbr": "WY"
  }
];


class Forecast {
  constructor(location, attributes) {
    this.location = location;
    this.current = {
      weather: attributes.currently,
      todaySummary: attributes.today_summary,
      tonightSummary: attributes.tonight_summary,
      todayHigh: attributes.today_high,
      todayLow: attributes.today_low
    };
    this.hourly = attributes.hourly_forecast;
    this.daily = attributes.daily_forecast;
  }

  getTime(timestamp) {
    const date = new Date(timestamp*1000);
    const day = date.toDateString();
    const time = date.toLocaleTimeString();
    return { day, time };
  }

  getIcon(summary) {
    if (/rain/gi.test(summary)) {
      return `<i class="fas fa-cloud-showers-heavy fa-2x"></i>`;
    }
    if (/partly.*cloudy/gi.test(summary)) {
      return `<i class="fas fa-cloud-sun fa-2x"></i>`;
    }
    if (/cloudy/gi.test(summary)) {
      return `<i class="fas fa-cloud"></i>`;
    } else {
      return `<i class="fas fa-sun fa-2x"></i>`;
    }
  }

  makeCurrent() {
    const { day, time } = this.getTime(this.current.weather.time);
    return `
    <section class="forecast">
      <div class="current overview">
        <p class="weather-main">${this.location} Weather</p>
        <p class="weather-main">${day}, ${time}</p>

        <div class="weather-icon">
        <h4 class="weather-details">${Math.floor(this.current.weather.temperature)}°</h4>
        ${this.getIcon(this.current.weather.summary)}
        </div>
        <p class="weather-details">Feels like ${Math.floor(this.current.weather.apparentTemperature)}°</p>
        <p class="weather-details">${this.current.weather.summary}</p>
        <p class="weather-details">Hi ${Math.floor(this.current.todayHigh)}F Lo ${Math.floor(this.current.todayLow)}</p>
      </div>
      <div class="current details">
        <table>
          <tr>
            <th>Weather Details - ${this.location}</th>
          </tr>
          <tr>
            <td>Humidity: ${Math.floor(this.current.weather.humidity*100)}%</td>
          </tr>
          <tr>
            <td>Chance of Rain: ${this.current.weather.precipProbability}</td>
          </tr>
          <tr>
            <td>Pressure: ${Math.floor(this.current.weather.pressure)}</td>
          </tr>
          <tr>
            <td>UV Index: ${this.current.weather.uvIndex}</td>
          </tr>
          <tr>
            <td>Visibility: ${this.current.weather.visibility}</td>
          </tr>
        </table>
      </div>
      <div class="current summaries">
        <p class="weather-main">${this.location} Weather Forecast</p>
        <div>
          <div class="weather-icon summaries">
            <p class="weather-main">Today</p>
            ${this.getIcon(this.current.todaySummary)}
          </div>
          <div class="weather-desc">
          <p class="weather-details">Hi ${Math.floor(this.current.todayHigh)}°F</p>
          <p class="weather-details">${this.current.todaySummary}</p>
          </div>
        </div>
        <div>
          <div class="weather-icon summaries">
            <p class="weather-main">Tonight</p>
            ${this.getIcon(this.current.tonightSummary)}
          </div>
          <div class="weather-desc">
            <p class="weather-details">Lo ${Math.floor(this.current.todayLow)}°F</p>
            <p class="weather-details">${this.current.tonightSummary}</p>
          </div>
        </div>
      </div>
    </section>
    `;
  }
}

const forecast = new Forecast("Denver, CO", weatherData);
//
// searchForm.addEventListener('submit', function(e) {
//   e.preventDefault();
//
//   const formData = new FormData(this);
//   const location = `${formData.get("city")}, ${formData.get("state")}`;
//   fetch(`${e.target.action}?location=${location}`)
//   .then(response => {
//     return response.json();
//   }).then(data => {
//     forecast = new Forecast(location, data.data.attributes);
//     weatherData = data.data.attributes;
//     this.classList.add('removed');
//     const div = document.createElement('div');
//     div.innerHTML = forecast.makeCurrent();
//     weatherSection.appendChild(div);
//   }).catch(error => {
//     console.error(error);
//   });
// });

window.addEventListener('load', function() {
  states.forEach((state) => {
    let selected = state.abbr === "CO" ? true : false;
    stateSelect.options[stateSelect.options.length] = new Option(
      state.name,
      state.abbr,
      selected,
      selected
    );
  });
});
