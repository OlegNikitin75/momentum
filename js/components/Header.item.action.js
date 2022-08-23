const itemAction = () => {
  const weatherBtn = document.querySelector('.btn__weather');
  const weather = document.querySelector('.weather')
  const playerBtn = document.querySelector('.btn__player ');
  const player = document.querySelector('.player');
  const btnClose = document.querySelector('.player__btn-close');
  const slider = document.querySelector('.slider__container');
  const boxSliderControls = document.querySelector('.slider-btn');
  let isVisibleWeather = true;
  let isVisible = true;
  let isVisibleSlider = true;
    const visibleHiddenWeather = () => {
      if (isVisibleWeather) {
        weather.classList.add('weather--active');
        isVisibleWeather = false;
        weatherBtn.style.left = 'calc(100% + 30px)';
      } else {
        weather.classList.remove('weather--active');
        isVisibleWeather = true;
        weatherBtn.style.left = 0;
      }
  };
  const visibleHiddenPlayer = () => {
    if (isVisible) {
      player.classList.add('player--active');
      isVisible = false;
      playerBtn.style.left = '-30px';
    } else {
      player.classList.remove('player--active');
      isVisible = true;
      playerBtn.style.left = 'calc(100% - 30px)';
    }
  };
  const visiblePlayerSlider = () => {
    if (isVisibleSlider) {
      slider.style.minHeight = 0;
      slider.style.height = 0;
      boxSliderControls.style.display = 'none';
      isVisibleSlider = false;
      btnClose.src = './images/chevron-double-down.svg';
    } else {
      slider.style.minHeight = '200px';
      btnClose.src = './images/chevron-double-up.svg';
      boxSliderControls.style.display = 'block';
      isVisibleSlider = true;
    }
  };
  weatherBtn.addEventListener('click', visibleHiddenWeather);
  playerBtn.addEventListener('click', visibleHiddenPlayer);
  btnClose.addEventListener('click', visiblePlayerSlider);
};
export default itemAction;