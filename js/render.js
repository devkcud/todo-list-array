import { __updateLocalStorage, getTodo, removeTodo } from "./todo.js";

function createListItem(uuid, todo) {
  const item = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.done;
  checkbox.addEventListener("change", () => {
    todo.done = checkbox.checked;
    __updateLocalStorage();
    render();
  });

  const description = document.createElement("input");
  description.value = todo.description;
  description.addEventListener("change", () => {
    todo.description = description.value;
    __updateLocalStorage();
  });

  const button = document.createElement("button");
  button.textContent = "X";

  button.addEventListener("click", () => {
    removeTodo(uuid);
    render();
  });

  item.append(checkbox, description, button);

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
