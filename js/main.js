import { addTodo } from "./todo.js";
import { render } from "./render.js";

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const input = form.querySelector("input");

  addTodo(input.value);

  input.value = "";

  render();
});

render();
