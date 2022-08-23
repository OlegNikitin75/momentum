import {quotes} from './Data.js';
import getRandomIntInclusive from './Get.random.number.js';
import {hours} from './Get.date.js';

const changeQuote = (val) => {
  val = val !== null ?  val : 0;
  const quote = document.querySelector('.quote__title');
  const quoteAuthor = document.querySelector('.quote__author');
  const btnQuote = document.querySelector('.settings__quote');
  const parentQuote = document.querySelector('.footer');
  const fieldsetQuote = document.querySelector('.fieldset__quote');
  const valLang = val;
  console.log(val)
  const getQuote = () => {
    const quotesLang = quotes[valLang];
    const randomNumber = getRandomIntInclusive(0, quotesLang.length - 1);
    console.log(randomNumber)
    const quotesItem = quotesLang[randomNumber];
    quote.textContent = Object.values(quotesItem);
    quoteAuthor.textContent = Object.keys(quotesItem);
  }
  getQuote()
  if (hours === 0) getQuote();
  parentQuote.addEventListener('mouseover', () => btnQuote.classList.add('btn--active'));
  parentQuote.addEventListener('mouseout', () => btnQuote.classList.remove('btn--active'));
  btnQuote.addEventListener('click', () => {
    fieldsetQuote.classList.add('active');
    if (fieldsetQuote.classList.contains('active'))
      setTimeout(() => fieldsetQuote.classList.remove('active'), 5000);
    fieldsetQuote.addEventListener('click', () => getQuote());
  });
};
export default changeQuote;
