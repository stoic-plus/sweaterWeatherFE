const searchForm = document.getElementById('search-form');
const stateSelect = document.getElementById('state-select');

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
let forecast;
let weatherData;

function getIcon(summary) {
  if (/rain/gi.test(summary)) {
    return `<i class="fas fa-cloud-showers-heavy"></i>`;
  }
  if (/partly.*cloudy/gi.test(summary)) {
    return `<i class="fas fa-cloud-sun"></i>`;
  }
  if (/cloudy/gi.test(summary)) {
    return `<i class="fas fa-cloud"></i>`;
  } else {
    return `<i class="far fa-sun"></i>`;
  }
}

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

  makeCurrent() {
    return `
    <div class="current-weather">
      <p class="weather-main">${location} Weather</p>
      <p class="weather-main">${this.current.weather.time}</p>

      <p class="weather-details">${this.current.weather.temperature}</p>
      <p class="weather-details">Feels like 53</p>
      <p class="weather-details">30% chance of Rain Showers</p>
      <p class="weather-details">Hi 53F Lo 30F</p>
    </div>
    `;
  }
}

searchForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const location = `${formData.get("city")}, ${formData.get("state")}`;
  fetch(`${e.target.action}?location=${location}`)
  .then(response => {
    return response.json();
  }).then(data => {
    forecast = new Forecast(location, data.data.attributes);
    weatherData = data.data.attributes;
    this.classList.add('removed');
  }).catch(error => {
    console.error(error);
  });
});

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
