import { showGreeting } from "./greetings.js";
import { dateTranslation } from './translation.js';
import { lang } from './settings.js';
 
const time = document.querySelector('.time');
const dates = document.querySelector('.date');

export default function showTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  time.textContent = currentTime;
  showDate();
  showGreeting();
  setTimeout(showTime, 1000);
}

function showDate() {
  const date = new Date();
  const options = {day: 'numeric', month: 'long', year: 'numeric'};
  const currentDate = date.toLocaleDateString(dateTranslation[lang][0], dateTranslation[lang][1]);
  dates.textContent = currentDate;
}
