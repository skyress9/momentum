import { greetingsTranslation } from './translation.js';
import { lang } from './settings.js';

const greeting = document.querySelector('.greeting');
export const name = document.querySelector('.name');

export function getTimeOfDay(lang = 'en') {
  const date = new Date();
  const hours = date.getHours();
  if (hours < 6) return greetingsTranslation[lang][0];
  else if (hours < 12) return greetingsTranslation[lang][1];
  else if (hours < 18) return greetingsTranslation[lang][2];
  else return greetingsTranslation[lang][3];
}

export function showGreeting() {
  const timeOfDay = lang == 'en' ? getTimeOfDay() : getTimeOfDay('ru');
  greeting.textContent = timeOfDay + ',';
}