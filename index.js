/**
    TODO-app

    Funktionalitet
    1. Lägg till en todo som en textsträng
    2. Visa all todos
    3. Ta bort en todo

    Att göra:
    1. Kunna skriva in en todo i ett inputfält
    2. När användaren klickar på en knapp lägg till todo i array
    3. Loopa igenom array och visa för användaren
    4. För varje array-element skapa ett element och lägg till i DOM:en
    5. Kunna ta bort en todo från array:en
 */

/**
    1. För varje todo skapa en checkbox och lägg till i DOM:en
    2. Sätt eventlistener på checkbox
    3. Skapa ett attribut och lägg todo på checkbox
    4. Leta upp todo i array och få tillbaka position
    5. Ta bort todo i array med splice
*/

let todos = [];

document.querySelector("#add-todo").addEventListener("click", function () {
  let todo = document.querySelector("#todo").value;
  addTodo(todo);
  document.querySelector("#todo").value = "";
  

});

function addTodo(todo) {
  todos.push(todo);
  displayTodos();
  
}

function displayTodos() {
  const todoUl = document.querySelector("#todos");
  todoUl.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    createTodoElem(todos[i], todoUl);
  }
}

function createTodoElem(todoLi, todoUl) {
  const todoElem = document.createElement("li");
  const checkboxElem = document.createElement("input");

  checkboxElem.setAttribute("type", "checkbox");
  checkboxElem.setAttribute("todo", todo);

  todoElem.innerHTML = todoLi;
  todoElem.append(checkboxElem);
  todoUl.append(todoElem);

  checkboxElem.addEventListener("click", function (event) {
    const todoText = event.target.getAttribute("todo");
    const index = todos.indexOf(todoText);
    todos.splice(index, 1);
    displayTodos();
  });

  todoElem.addEventListener("click", function (event) {
    event.target.classList.toggle("done");
  });
}

