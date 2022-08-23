import { source } from './Data.music.js';

const actionSlider = () => {
  const sliderContainer = document.querySelector('.slider__container');
  const themeButtons = document.querySelectorAll('.slider__btn');
  const btnNext = document.querySelector('.slider-btn__next');
  const btnPrev = document.querySelector('.slider-btn__prev');
  let slideIndex = 0;
  let sliderId = 0;
  let folder = source[sliderId];
  sliderContainer.style.backgroundImage = `url(./images/slider-bg.jpg)`;
  const activeMenu = () => {
    const btnSettings = document.querySelector('.slider__settings-btn--settings');
    const sliderThemeMenu = document.querySelector('.slider__buttons');
    btnSettings.addEventListener('click', () => {
      btnSettings.classList.toggle('slider__settings-btn--active');
      sliderThemeMenu.classList.toggle('slider__buttons--active');
    });
  };
  activeMenu();
  const nextSlide = () => {
    slideIndex++;
    if (slideIndex > folder.length - 1) {
      slideIndex = 1;
    }
    sliderContainer.animate ([
        { opacity: 0 },
        { opacity: 1 },
      ],
      { duration: 1000 });
    sliderContainer.style.backgroundImage = `url(${source[sliderId][slideIndex]})`;
  };
  const prevSlide = () => {
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = folder.length - 1;
    }
    sliderContainer.animate([
      { opacity: 0 },
      { opacity: 1 },
    ],
      { duration: 2000 });
    sliderContainer.style.backgroundImage = `url(${source[sliderId][slideIndex]})`;
  };

  btnNext.addEventListener('click', () => {
    nextSlide();
  });
  btnPrev.addEventListener('click', () => {
    prevSlide();
  });

  themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      sliderId = btn.id;
      sliderContainer.style.backgroundImage = `url(${source[sliderId][slideIndex]})`;
      themeButtons.forEach(item => {
        if (item.classList.contains('slider__btn--active')) {
          item.classList.remove('slider__btn--active');
        }
      });
      btn.classList.toggle('slider__btn--active');
    });
  });

};
export default actionSlider;

