import { focusTitles } from "./Data.js";
const changeFocus = (val, valFocus) => {
  val = val !== null ?  val : 0;

  const focusTitle = document.querySelector('.section-focus__title');
  const btnFocusCheck = document.querySelector('.settings__focus');
  const focusTask = document.querySelector('.focus__input');
  const parentFocus = document.querySelector('.section-focus');
  const fieldsetFocus = document.querySelector('.fieldset__focus');
  const btnFocus = document.querySelector('.focus__btn');
  parentFocus.addEventListener('mouseover', () => btnFocusCheck.classList.add('btn--active'));
  parentFocus.addEventListener('mouseout', () => btnFocusCheck.classList.remove('btn--active'));
  btnFocusCheck.addEventListener('click', () => {
    console.log('click');

    fieldsetFocus.classList.add('active');
    if (fieldsetFocus.classList.contains('active'));
    setTimeout(() => fieldsetFocus.classList.remove('active'), 5000);
  });
  focusTitle.innerText = focusTitles[val];
  const width = focusTitle.offsetWidth;
  focusTask.innerText = valFocus;
  focusTask.style.minWidth = `${width}px`;
  focusTask.addEventListener('blur', () => {
    if (focusTask.firstChild) {
      const taskMessage = focusTask.firstChild.nodeValue;
      localStorage.setItem('focus-task', taskMessage);
    }
  });
  btnFocus.addEventListener('click', () => {
    focusTask.innerText = '';
    localStorage.setItem('focus-task', '');
  })
};
export default changeFocus;
