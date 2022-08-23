const greetingSettings = () => {
  const parentGreeting = document.querySelector('.section-greeting');
  const btnGreeting = document.querySelector('.settings__greeting');
  const fieldsetGreeting = document.querySelector('.fieldset__greeting');
  parentGreeting.addEventListener('mouseover', () => btnGreeting.classList.add('btn--active'));
  parentGreeting.addEventListener('mouseout', () => btnGreeting.classList.remove('btn--active'));
  btnGreeting.addEventListener('click', () => {
    fieldsetGreeting.classList.add('active');
    if (fieldsetGreeting.classList.contains('active'))
      setTimeout(() => fieldsetGreeting.classList.remove('active'), 5000);
  });
}
export default greetingSettings;