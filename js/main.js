import { addTodo } from "./todo.js";
import { render } from "./render.js";

// Seleciona o elemento form
const form = document.querySelector("form");

// Adiciona um listener para o evento submit (enviar dados)
form.addEventListener("submit", (event) => {
  // Previne o comportamento padrão
  event.preventDefault();

  // Seleciona o elemento input (a descrição que o usuario digitou)
  const input = form.querySelector("input");

  // Adiciona a tarefa
  addTodo(input.value);

  // Limpa o input
  input.value = "";

  // Atualiza a visualização
  render();
});

render();
