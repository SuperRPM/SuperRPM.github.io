const loginForm = document.querySelector("#login-form");
const logInput = document.querySelector("#login-form input");
const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
    event.preventDefault();
    const username = logInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add("hidden");
    showTodoList(username)
}

function showTodoList(username) {
    todoList.classList.remove(HIDDEN_CLASSNAME)
    todoForm.classList.remove(HIDDEN_CLASSNAME)
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (!savedUsername) {
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    showTodoList(savedUsername);
}
