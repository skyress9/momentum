import playList from "./playList.js";

const playBtn = document.querySelector('.play');
const nextBtn = document.querySelector('.play-next');
const prevBtn = document.querySelector('.play-prev');

const progress = document.querySelector('.input-progress');
const volume = document.querySelector('.input-volume');
const volumeBtn = document.querySelector('.volume-mute');

const duration = document.querySelector('.play-duration');
const nameTrack = document.querySelector('.play-track');

let isPlay = false;
let playNum = 0;

const audio = new Audio();

function createPlayList() {
  playList.forEach(e => {
    const li = document.createElement('li');
    li.classList.add('play-item');
    li.textContent = e.title;

    document.querySelector('.play-list').append(li)
  })
}

function stylizeItems() {
  const items = document.querySelectorAll('.play-item');
  items.forEach(e => e.classList.remove('item-active'));
  items[playNum].classList.add('item-active');
}

function play() {
  if (!isPlay) {
    isPlay = true;

    audio.src = playList[playNum].src;
    audio.currentTime = 0;
    audio.play()
  } else {
    isPlay = false;
    audio.pause();
  }

  nameTrack.textContent = playList[playNum].title;
  stylizeItems();
  toggleBtn();
}

function playNext() {
  playNum == playList.length - 1 ? playNum = 0 : playNum++;
  isPlay = false;
  
  play();
}

function playPrev() {
  playNum == 0 ? playNum = playList.length - 1 : playNum--;
  isPlay = false;

  play();
}

function toggleBtn() {
  isPlay == true ? playBtn.classList.add('pause') : playBtn.classList.remove('pause');
}

function playTime() {
  let time = Math.floor(audio.currentTime / audio.duration * 100);
  time = isFinite(time) ? time : time = 1;

  progress.style.background = `linear-gradient(to right, rgb(255, 255, 255) 0%, rgb(255, 255, 255) ${time}%, rgba(196, 196, 196, 0.411) ${time}%, rgba(196, 196, 196, 0.411) 100%)`;
  progress.value = time;
  duration.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
}

function formatTime(sec) {
  const minutes = Math.floor(sec / 60) || 0;
  const seconds = Math.floor((sec - minutes * 60)) || 0;
  
  return `${minutes}:${(seconds < 10 ? '0' : '') + seconds}`;
}

function changeTime() {
  audio.currentTime = isFinite(audio.duration) ? progress.value / 100 * audio.duration : audio.currentTime = 1;
  progress.style.background = `linear-gradient(to right, rgb(255, 255, 255) 0%, rgb(255, 255, 255) ${progress.value}%, rgba(196, 196, 196, 0.411) ${progress.value}%, rgba(196, 196, 196, 0.411) 100%)`;
}

function changeVolume() {
  if (volume.value > 0) volumeBtn.classList.remove('mute');
  audio.volume = volume.value / 100;
  volume.style.background = `linear-gradient(to right, rgb(255, 255, 255) 0%, rgb(255, 255, 255) ${volume.value}%, rgba(196, 196, 196, 0.411) ${volume.value}%, rgba(196, 196, 196, 0.411) 100%)`;
}

function muteVolume() {
  volumeBtn.classList.contains('mute') ? volume.value = 50 : volume.value = 0;
  volumeBtn.classList.toggle('mute');
  changeVolume();
}

progress.addEventListener('input', changeTime);
volume.addEventListener('input', changeVolume);
volumeBtn.addEventListener('click', muteVolume);

playBtn.addEventListener('click', play);
nextBtn.addEventListener('click', playNext);
prevBtn.addEventListener('click', playPrev);

audio.addEventListener('timeupdate', playTime);
audio.addEventListener('ended', playNext);

createPlayList();
stylizeItems();
