import { getTodo, removeTodo } from "./todo.js";

function createListItem(uuid, todo) {
  const item = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.done;
  checkbox.addEventListener("change", () => {
    todo.done = checkbox.checked;
    render();
  });

  const span = document.createElement("span");
  span.textContent = todo.description;

  const button = document.createElement("button");
  button.textContent = "X";

  button.addEventListener("click", () => {
    removeTodo(uuid);
    render();
  });

  item.append(checkbox, span, button);

  return item;
}

function render() {
  const todoList = document.querySelector("ul#todo");
  const doneList = document.querySelector("ul#done");

  todoList.innerHTML = "";
  doneList.innerHTML = "";

  for (const uuid of Object.keys(getTodo())) {
    const todo = getTodo(uuid);

    const item = createListItem(uuid, todo);

    (todo.done ? doneList : todoList).append(item);
  }
}

export { render };
