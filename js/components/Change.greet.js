import { greet } from './Data.js';
import changeQuote from './Change.quote.js';
import changeFocus from './Change.focus.js';
import setDateToday  from './Set.today.js';
import setElemLang  from './Change.lang.elem.js';
import { hours } from './Get.date.js';
const changeGreeting = () => {

  let val = 0;
  const greeting = document.querySelector('#greeting1');
  const langList = document.querySelector('.select');

  
  val = Number(localStorage.getItem('val'));
  const valFocus = localStorage.getItem('focus-task');
  langList.options[val].selected = true;
  const TimeChange = () => {
    if (hours >= 0 && hours < 6) greeting.innerText = greet[val][0];
    if (hours >= 6 && hours < 12) greeting.innerText = greet[val][1];
    if (hours >= 12 && hours < 17) greeting.innerText = greet[val][2];
    if (hours >= 17 && hours < 24) greeting.innerText = greet[val][3];
  }
  TimeChange();
  
  langList.addEventListener('change', () => {
    val = langList.options[langList.selectedIndex].value;
    setElemLang(val);
    TimeChange();
    changeQuote(val);
    setDateToday(val);
    changeFocus(val,valFocus);
    localStorage.setItem('val', val);
  });
}
export default changeGreeting;