const toDoForm = document.getElementById('todo-form')
const toDoInput = toDoForm.querySelector('input'); 
const toDoList = document.getElementById('todo-list')

const TODOS_KEY = "todos";
let toDos = []

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(element => {
        addToDo(element)
    });
}


function addToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.id = newTodo.id;
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "Done";
    button.addEventListener('click', (e) => {
        const liToDelete = e.target.parentElement;
        toDos = toDos.filter((toDo) => {
            return toDo.id !== +li.id;
        });
        saveToDos();
        liToDelete.remove();
    })
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function toDoSubmit(e) {
    e.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    addToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", toDoSubmit)