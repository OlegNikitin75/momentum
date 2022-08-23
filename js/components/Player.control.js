import { musics } from './Data.music.js';
import { srcs } from './Data.music.js';
const control = () => {
  const btnControls = document.querySelector('.player__buttons');
  const btnIcon = document.querySelector('.btn__icon');
  const progress = document.querySelector('.player__line');
  const performerTitle = document.querySelector('.player__performer');
  const compositionTitle = document.querySelector('.player__composition');
  const song = document.querySelector('#song');
  let isPlaying = true;
  let track = 0;
  const nextSong = () => {
    track++;
    if (track > musics.length - 1) {
      track = 0;
    }
    song.src = srcs[track];
    performerTitle.innerHTML = musics[track].performer;
    compositionTitle.innerHTML = musics[track].composition;
    isPlaying = true;
    playPause();
  }
  const prevSong = () => {
    track--;
    if (track < 0) {
      track = 0;
    }
    song.src = srcs[track];
    performerTitle.innerHTML = musics[track].performer;
    compositionTitle.innerHTML = musics[track].composition;
    isPlaying = true;
    playPause();
  };
  const playPause = () => {
    if (isPlaying) {
      const song = document.querySelector('#song');
      btnIcon.src = "./images/play-circle.svg";
      song.play();
      isPlaying = false;
    } else {
      btnIcon.src = "./images/pause-circle.svg";
      song.pause();
      isPlaying = true;
    }
  };
  const formatTime = (seconds) => {
    let min = Math.floor((seconds / 60));
    let sec = Math.floor(seconds - (min * 60));
    if (sec < 10) {
      sec = `0${sec}`;
    };
    return `${min}:${sec}`;
  };
  const updateProgress = () => {
    progress.max = song.duration;
    progress.value = song.currentTime;
    document.querySelector('.time__start').innerHTML = (formatTime(Math.floor(song.currentTime)));
    if (document.querySelector('.time__end').innerHTML === "NaN:NaN") {
      document.querySelector('.time__end').innerHTML = "0:00";
    } else {
      document.querySelector('.time__end').innerHTML = (formatTime(Math.floor(song.duration)));
    }
  };
  setInterval(updateProgress, 500);
  const changeProgressBar = () => {
    song.currentTime = progress.value;
  };
  progress.addEventListener('change', () => changeProgressBar())
  btnControls.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn__icon')) {
      playPause();
    }
    if (e.target.classList.contains('btn__next')) {
      nextSong();
    }
    if (e.target.classList.contains('btn__prev')) {
      prevSong();
    }
  });
  song.addEventListener('ended', () => {
    nextSong();
  });

};
export default control;
