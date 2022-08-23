import { imagesUrls } from "./Data.js";
import getRandomIntInclusive from "./Get.random.number.js";

const changeImgBg = () => {
  const body = document.body;
  const date = new Date();
  const hours = date.getHours();
  
  const maxImgNight = imagesUrls[0].length - 1;
  const maxImgMorning = imagesUrls[1].length - 1;
  const maxImgDay = imagesUrls[2].length - 1;
  const maxImgEvening = imagesUrls[3].length - 1;

  if (hours >= 0 && hours < 6)
    body.style.backgroundImage = `url(${imagesUrls[0][getRandomIntInclusive(0, maxImgNight)]})`;
  if (hours >= 6 && hours < 12)
    body.style.backgroundImage = `url(${imagesUrls[1][getRandomIntInclusive(0, maxImgMorning)]})`;
  if (hours >= 12 && hours < 17)
    body.style.backgroundImage = `url(${imagesUrls[2][getRandomIntInclusive(0, maxImgDay)]})`;
  if (hours >= 17 && hours < 24)
    body.style.backgroundImage = `url(${imagesUrls[3][getRandomIntInclusive(0, maxImgEvening)]})`;
};
export default changeImgBg;