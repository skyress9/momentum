import { showGreeting } from "./greetings.js";
import { getWeather } from './weather.js';
import { getLocalStorage } from "./localStorage.js";
import getQuotes from "./quotes.js";
import showTime from "./time.js";

const settingsBtn = document.querySelector('.settings-btn');
const settings = document.querySelector('.settings');
const selectLanguage = document.querySelector('.select-language');
const selectApi = document.querySelector('.select-api');

const time = document.querySelector('#time');

export const state = {
  language: 'en',
  photoSource: 'github',
  blocks: ['time', 'date','greeting', 'quote', 'weather', 'audio', 'todolist']
}

export let lang = 'en';

function toggleSettings() {
  settings.classList.toggle('active');
  settingsBtn.classList.toggle('active');
}

function reload() {
  showGreeting();
  showTime();
  getWeather();
  getLocalStorage();
  getQuotes();
}

settingsBtn.addEventListener('click', toggleSettings)

selectLanguage.addEventListener('change', () => {
  state.language = selectLanguage.value;
  lang = state.language;
  reload();
});

selectApi.addEventListener('change', () => {
  state.photoSource = selectApi.value;
})
