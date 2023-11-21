/** Objeto **todos**
 *
 * @type {object}
 * @property {object} todos
 * @property {string} todos.uuid
 * @property {string} todos.uuid.description
 * @property {boolean} todos.uuid.done
 */
let todos = {
  /* TEMPLATE:
  'uuid': {
    description: 'Buy milk',
    done: false,
  },
  */
};

// Carrega os dados do localStorage caso existam
if (localStorage.getItem("todos")) {
  todos = JSON.parse(localStorage.getItem("todos"));
}

// Salva os dados no localStorage
// TODO: Remover essa função e usar outro método de salvamento; não é tão ideal ter diversas vezes essa função por todo o código
function __updateLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

/** Adiciona uma tarefa no objeto **todos**.
 *
 * @param {string} description - A descrição da tarefa.
 * @param {boolean} [done = false] - Se a tarefa foi concluida. [default: `false`]
 * @returns {string} O ID da tarefa adicionada
 */
function addTodo(description, done = false) {
  // Gera um ID único aleatório
  let uuid;

  // Verifica se o browser suporta a função `crypto.randomUUID()`
  if (!(window.crypto.randomUUID instanceof Function)) {
    console.log("Seu navegador não suporta a função `crypto.randomUUID()`");
    console.log("Usando método alternativo")

    // Implementação alternativa
    uuid = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[-1]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16),
    );
  } else {
    // Standard
    uuid = window.crypto.randomUUID();
  }

  console.log(uuid);

  // Adiciona a tarefa
  todos[uuid] = { description, done };

  // Salva os dados no localStorage
  __updateLocalStorage();

  // Retorna o ID para futuras referências
  return uuid;
}

/** (Tenta) Remover uma tarefa do objeto **todos**.
 *
 * @param {string} uuid - O ID da tarefa a ser removida.
 * @returns {boolean} Se a tarefa foi removida
 */
function removeTodo(uuid) {
  // Caso a tarefa não exista, retorna falso
  if (!todos[uuid]) {
    return false;
  }

  // Caso a tarefa exista, remova-a do objeto **todos** e retorna verdadeiro
  delete todos[uuid];

  // Salva os dados no localStorage
  __updateLocalStorage();

  return true;
}

/** Retorna um item do objeto **todos** ou o objeto inteiro.
 *
 * @example `{ 'uuid': { description: 'Buy milk', done: false }, ... }`
 * @param {string} [id = ''] - O ID do item a ser retornado. [default: `''`]
 * @returns {object | null} O objeto com os itens do **todos** ou um item só
 *     (retorna `null` caso o id não exista).
 */
function getTodo(id = "") {
  // Retorna todos os itens caso o id seja vazio
  if (!id) {
    return todos;
  }

  // Retorna null caso o item não exista
  if (!todos[id]) {
    return null;
  }

  // Retorna o item caso o id exista
  return todos[id];
}

// Exportação de funções
export { addTodo, removeTodo, getTodo, __updateLocalStorage };
