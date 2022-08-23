const setDate = () => {
  const timeBox = document.querySelector('.time__inner');
  const formatValue = document.querySelector('.legend__format span');
  const checkboxFormat = document.querySelector('.checkbox-input');
  const timeMark = document.querySelector('.time__mark');
  let check = localStorage.getItem('checked');

  // localStorage.clear();
  checkboxFormat.addEventListener('change', () => {

    if (checkboxFormat.checked !== true) {
      formatValue.innerText = '12';
      timeMark.classList.add('time__mark--active');
      localStorage.setItem('checked', false);

    } else if (checkboxFormat.checked === true) {
      formatValue.innerText = '24';
      timeMark.classList.remove('time__mark--active');
      localStorage.setItem('checked', true);
    }
  });
  const formatValueNumber = Number(formatValue.textContent.replace(/hours/, ''));
  const time = new Date();
  let hours = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
  let minute = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
  // let second = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();
  if (hours < 12 && hours >= 0) timeMark.innerText = 'AM';
  if (hours > 12 && hours < 24) timeMark.innerText = 'PM';
  if (formatValueNumber === 12 && hours > 12) hours = hours % 12;
  else if (formatValueNumber === 12 && hours === 12) hours = 12;
  if (check === 'false') {
    checkboxFormat.checked = false;
    formatValue.innerText = '12';
    timeMark.classList.add('time__mark--active');
    hours = hours % 12
  }
  // timeBox.innerHTML = `${hours}:${minute}:${second}`
  timeBox.innerHTML = `${hours}:${minute}`
}
export default setDate;

