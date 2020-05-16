let listTodo = document.querySelector('.container ul');
let inputElement = document.querySelector('.form-todo input');
let buttonElement = document.querySelector('.form-todo button');

let todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
  listTodo.innerHTML = '';

  for (todo of todos) {
    let todoElement = document.createElement('li');
    let todoText = document.createTextNode(todo);

    let buttonDelete = document.createElement('a');
    let buttonText = document.createTextNode('Deletar');

    buttonDelete.setAttribute('href', '#');
    buttonDelete.appendChild(buttonText)

    let position = todos.indexOf(todo);
    buttonDelete.setAttribute('onclick', `deleteTodo(${position})`);

    todoElement.appendChild(todoText);
    todoElement.appendChild(buttonDelete);
    listTodo.appendChild(todoElement);
  }
}

renderTodos();

function addTodo() {
  let todoValue = inputElement.value;

  if (todoValue === ''){
    alert('Digite uma tarefa válida');
  } else {
    todos.push(todoValue);
    inputElement.value = '';
    renderTodos();
  }
}

buttonElement.onclick = addTodo;

function deleteTodo(position) {
  todos.splice(position, 1)
  renderTodos();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('list_todos', JSON.stringify(todos));
}
