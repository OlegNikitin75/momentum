const actionTodo = () => {
  const todo = document.querySelector('.todo');
  const todoList = document.querySelector('.todo__list');
  const todoSpan = document.querySelector('.todo__new-text');
  const todoBtnAdd = document.querySelector('.todo__new-btn');
  const todoBtnActive = document.querySelector('.btn__todo ');

  let todoItemText = null;
  const todos = [];
  let counter = 0;

  const createItem = () => {
    if (todoSpan.firstChild) {
      todoItemText = todoSpan.firstChild.nodeValue;
    }
    if (todoItemText) {
      const todoItem = document.createElement('li');
      todoItem.classList.add('todo__item');
      todoItem.id = `todo-${counter}`;

      todoItem.innerHTML = `
      <label class="todo__label">
        <input type="checkbox" class="todo__checkbox">
        <span class="todo__fake"></span>
      </label>
      <p class="todo__item-text">${todoItemText}</p>
      <img class="todo__btn todo__btn--edit" src="./images/edit.svg" alt="icon">
      <img class="todo__btn todo__btn--close" src="./images/x-circle.svg" alt="icon">
    `
      todoList.append(todoItem);
      todos.push(
        {
          idNum: counter,
          checkbox: false,
          message: todoItemText
        }
      );
      localStorage.setItem('todos', JSON.stringify(todos));
      counter++;
    }
    else {
      return
    }
    todoSpan.firstChild.nodeValue = '';


    console.log(todos);

  };




  const editItem = (btn) => {
    const textItemEdit = btn.previousElementSibling;
    textItemEdit.contentEditable = true;
    textItemEdit.classList.add('todo__content--edit');
    textItemEdit.addEventListener('blur', () => {
      textItemEdit.contentEditable = false;
      textItemEdit.classList.remove('todo__content--edit');
    });
  };

  const getCheckValue = () => {
    console.log(555);


  };

 
  



  const deleteItem = (btn) => {
    const listItem = btn.closest('li');
    const id = listItem.id.replace('todo-', '');
    const listBox = listItem.parentNode
    listBox.removeChild(listItem);
    if (!listBox.firstChild) {
      todos.length = 0;
    }
    for (let todo of todos) {
      if (todo.idNum == id) {
        todos.splice(id, 1);
      }
    }
    localStorage.setItem('todos', JSON.stringify(todos));
  };
  todoBtnActive.addEventListener('click', () => {
    todo.classList.toggle('todo--active');
    todoBtnActive.classList.toggle('btn__todo--active')
  });
  todoBtnAdd.addEventListener('click', createItem);
  todoList.addEventListener('click', (e) => {
    if (e.target.classList.contains('todo__btn--close')) {
      const btn = e.target;
      deleteItem(btn);
    }
    if (e.target.classList.contains('todo__btn--edit')) {
      const btn = e.target;
      editItem(btn);
    }

  });
};
export default actionTodo;