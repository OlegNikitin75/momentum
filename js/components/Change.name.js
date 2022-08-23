const changeName = () => {
  const changeNameBtn = document.querySelector('.greeting__btn');
  const name = document.querySelector('#user-name');
  const userName = localStorage.getItem('user-name');
  console.log(userName)
  name.innerText = userName !== '' ? userName : 'User';
  const noEdit = () => {
    name.contentEditable = false;
    name.style.background = 'transparent';
    name.blur();
    const userName = name.textContent;
    localStorage.setItem('user-name', userName)
  }
  changeNameBtn.addEventListener('click', () => {
    name.contentEditable = true;
    name.style.background = 'var(--color-elem-bg)';
    name.focus();
  });
  document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') noEdit();
  });
  document.body.addEventListener('click', (e) => {
    if (!e.target.classList.contains('greeting__btn')
      && e.target !== name) noEdit();
  });
}
export default changeName;
