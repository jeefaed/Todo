document.getElementById('todo-form').addEventListener('submit', function (event) {
    event.preventDefault();
    let todoInput = document.getElementById('todo-input');
    let todoList = document.getElementById('todo-list');
    let todoItem = document.createElement('li');
    let todoText = document.createTextNode(todoInput.value);
    let deleteButton = document.createElement('button');
    let editButton = document.createElement('button');
    editButton.classList = 'edit-button'
    let deleteText = document.createTextNode('Удалить');
    let editText = document.createTextNode('Редактировать');
    deleteButton.appendChild(deleteText);
    editButton.appendChild(editText);

    todoItem.appendChild(todoText);
    todoItem.appendChild(deleteButton);
    todoItem.appendChild(editButton);
    todoList.appendChild(todoItem);

    todoInput.value = '';

    deleteButton.addEventListener('click', function () {
        todoItem.remove();
        updateLocalStorage();
    });

    editButton.addEventListener('click', function () {
        let newTodoText = prompt('Введите новое значение:');
        if (newTodoText) {
            todoText.nodeValue = newTodoText;
            updateLocalStorage();
        }
    });

    updateLocalStorage();
});

function updateLocalStorage() {
    let todos = [];
    let todoItems = document.querySelectorAll('#todo-list li');
    todoItems.forEach(function (todoItem) {
        todos.push(todoItem.firstChild.nodeValue);
    });
    localStorage.setItem('todos', JSON.stringify(todos));
}

window.onload = function () {
    if (localStorage.getItem('todos')) {
        let todos = JSON.parse(localStorage.getItem('todos'));
        let todoList = document.getElementById('todo-list');
        todos.forEach(function (todo) {
            let todoItem = document.createElement('li');
            let todoText = document.createTextNode(todo);
            let deleteButton = document.createElement('button');
            let editButton = document.createElement('button');
            editButton.classList = 'edit-button'
            let deleteText = document.createTextNode('Удалить');
            let editText = document.createTextNode('Редактировать');
            deleteButton.appendChild(deleteText);
            editButton.appendChild(editText);

            todoItem.appendChild(todoText);
            todoItem.appendChild(deleteButton);
            todoItem.appendChild(editButton);
            todoList.appendChild(todoItem);

            deleteButton.addEventListener('click', function () {
                todoItem.remove();
                updateLocalStorage();
            });

            editButton.addEventListener('click', function () {
                let newTodoText = prompt('Введите новое значение:');
                if (newTodoText) {
                    todoText.nodeValue = newTodoText;
                    updateLocalStorage();
                }
            });
        });
    }
}
