import { SunriseSunset } from './cvic_vychod-zapad';

fetch('https://api.sunrise-sunset.org/json?lat=50&lng=14.5')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const sunset = document.querySelector('#sunset');
    sunset.innerHTML = SunriseSunset({
      sunrise: data.results.sunrise,
      sunset: data.results.sunset,
    });
  });
