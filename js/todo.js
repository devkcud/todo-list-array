/** Objeto **todos**
 *
 * @type {object}
 * @property {object} todos
 * @property {string} todos.uuid
 * @property {string} todos.uuid.description
 * @property {boolean} todos.uuid.done
 */
const todos = {
  /* TEMPLATE:
  'uuid': {
    description: 'Buy milk',
    done: false,
  },
  */
};

/** Adiciona uma tarefa no objeto **todos**.
 *
 * @param {string} description - A descrição da tarefa.
 * @param {boolean} [done = false] - Se a tarefa foi concluida. [default: `false`]
 * @returns {string} O ID da tarefa adicionada
 */
function addTodo(description, done = false) {
  // Gera um ID único aleatório
  const uuid = crypto.randomUUID();

  // Adiciona a tarefa
  todos[uuid] = { description, done };

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
  return true;
}

/** Retorna um item do objeto **todos** ou o objeto inteiro.
 *
 * @example `{ 'uuid': { description: 'Buy milk', done: false }, ... }`
 * @param {string} [id = ''] - O ID do item a ser retornado. [default: `''`]
 * @returns {object | null} O objeto com os itens do **todos** ou um item só (retorna `null` caso o id não exista).
 */
function getTodo(id = "") {
  if (!id) {
    return todos;
  }

  if (!todos[id]) {
    return null;
  }

  return todos[id];
}

// Exportação de funções
export { addTodo, removeTodo, getTodo };
