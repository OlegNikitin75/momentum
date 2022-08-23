const timeSettings = () => {
  const parentClock = document.querySelector('.section-time');
  const btnSettings = document.querySelector('.settings__clock');
  const fieldsetFormat = document.querySelector('.fieldset__format')
  parentClock.addEventListener('mouseover', () => btnSettings.classList.add('btn--active'));
  parentClock.addEventListener('mouseout', () => btnSettings.classList.remove('btn--active'));
  btnSettings.addEventListener('click', () => {
    
    fieldsetFormat.classList.add('active');
    if (fieldsetFormat.classList.contains('active'))
      setTimeout(() => fieldsetFormat.classList.remove('active'), 5000);
  });
}
export default timeSettings