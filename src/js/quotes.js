import { lang } from './settings.js';

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const button = document.querySelector('.change-quote');

export default async function getQuotes() {
  const quotes = 'json/data.json';
  const result = await fetch(quotes);
  const data = await result.json();
  const index = Math.round(Math.random() * (data.length - 1));

  quote.textContent = data[index][lang];
  author.textContent = data[index].author;
}

button.addEventListener('click', getQuotes);

getQuotes();