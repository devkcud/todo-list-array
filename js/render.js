import { __updateLocalStorage, getTodo, removeTodo } from "./todo.js";

/** Cria uma LI com os dados de uma tarefa
 *
 * @param {string} uuid - O ID da tarefa.
 * @param {object} todo - Os dados da tarefa
 *
 * @returns {HTMLLIElement} O elemento LI criado
 */
function createListItem(uuid, todo) {
  // Cria o elemento LI
  const item = document.createElement("li");

  // Cria os elementos input
  const checkbox = document.createElement("button");
  checkbox.classList.add("checkbox");
  todo.done && checkbox.classList.add("done");

  // Atualiza o estado da tarefa
  checkbox.addEventListener("click", () => {
    todo.done = !checkbox.classList.contains("done");
    __updateLocalStorage();
    // Atualiza a visualização
    render();
  });

  // Cria o elemento de descrição
  // A descrição pode ser alterada
  const description = document.createElement("input");
  description.type = "text";
  description.value = todo.description;
  // Atualiza a descrição da tarefa
  description.addEventListener("change", () => {
    todo.description = description.value;
    __updateLocalStorage();
    // Não há necessidade de atualizar a visualização
  });

  // Cria o elemento de botão de remover
  const button = document.createElement("button");
  button.textContent = "X";
  // Remove o item da lista
  button.addEventListener("click", () => {
    removeTodo(uuid);
    render();
  });

  // Adiciona os elementos criados ao elemento LI
  item.append(checkbox, description, button);

  // Retorna o elemento LI
  return item;
}

/** Renderiza a lista de tarefas
 *
 * @returns {void}
 */
function render() {
  // Seleciona as listas
  const todoList = document.querySelector("ul#todo");
  const doneList = document.querySelector("ul#done");

  // Limpa as listas
  todoList.innerHTML = "";
  doneList.innerHTML = "";

  // Adiciona os elementos
  // Object.keys(getTodo()) -> Retorna um array com os IDs
  for (const uuid of Object.keys(getTodo())) {
    // Pega a tarefa pelo ID
    const todo = getTodo(uuid);

    // Cria o elemento LI
    const item = createListItem(uuid, todo);

    // Adiciona o elemento LI em uma das listas de acordo com o estado
    (todo.done ? doneList : todoList).append(item);
  }
}

// Exportação de funções
export { render };
