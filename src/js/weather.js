import { weatherTranslation } from './translation.js';
import { lang } from './settings.js';

const weatherIcon = document.querySelector('.weather-icon');
const temp = document.querySelector('.temperature');
const weatherDesc = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const error = document.querySelector('.weather-error');

export const city = document.querySelector('.city');

export async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${lang}&appid=5c61801844486eaf158f77f25ecbdb46&units=metric`;
  const result = await fetch(url);
  const data = await result.json();
  error.textContent = '';
  
  if (!result.ok) {
    weatherIcon.className = '';
    temp.textContent = '';
    weatherDesc.textContent = '';
    wind.textContent = ''
    humidity.textContent = ''

    return error.textContent = `Error: "${city.value}" not found`;
  }

  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temp.textContent = `${Math.round(data.main.temp)} °C`;
  weatherDesc.textContent = data.weather[0].description;
  wind.textContent = `${weatherTranslation[lang][0]}: ${Math.round(data.wind.speed)} m/s`
  humidity.textContent = `${weatherTranslation[lang][1]}: ${data.main.humidity}%`
}

city.addEventListener('change', getWeather);

