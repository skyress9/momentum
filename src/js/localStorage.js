import { name } from './greetings.js';
import { city, getWeather } from './weather.js';
import { placeholderTranslation, cityTranslation } from './translation.js';
import { lang } from './settings.js';

function setLocalStorage() {
  localStorage.setItem('name', name.value);
  localStorage.setItem('weather', city.value);
}

window.addEventListener('beforeunload', setLocalStorage);

export function getLocalStorage() {
  name.placeholder = placeholderTranslation[lang][0];
  city.placeholder = placeholderTranslation[lang][1];

  if (localStorage.getItem('name')) name.value = localStorage.getItem('name');
  if (localStorage.getItem('weather')) city.value = localStorage.getItem('weather');
  else city.value = cityTranslation[lang][0];
  getWeather();
}

window.addEventListener('load', getLocalStorage);