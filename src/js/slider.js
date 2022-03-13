import { getTimeOfDay } from "./greetings.js";
import { getLinkToImage, getLinkToImageFlickr } from './imagesApi.js';
import { state } from './settings.js';

let num;
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');

function getRandomNumber() {
  num = Math.ceil(Math.random() * 20);
}

getRandomNumber();

export async function setBg(ap) {
  const timeOfDay = getTimeOfDay().slice(5);
  const numBg = String(num).padStart(2, '0')
  const img = new Image();
  
  if (ap == 'github') img.src = `https://raw.githubusercontent.com/skyress9/stage1-tasks/assets/images/${timeOfDay}/${numBg}.jpg`;
  else if (ap == 'unsplash') img.src = await getLinkToImage(timeOfDay);
  else if (ap == 'flickr') img.src = await getLinkToImageFlickr(timeOfDay);

  img.addEventListener('load', () => document.querySelector('body').style.backgroundImage = `url(${img.src})`);
}

setBg(state.photoSource);

function getSlideNext() {
  num == 20 ? num = 1 : num++;
  setBg(state.photoSource);
}

slideNext.addEventListener('click', getSlideNext);

function getSlidePrev() {
  num == 1 ? num = 20 : num--;
  setBg(state.photoSource);
}

slidePrev.addEventListener('click', getSlidePrev);

