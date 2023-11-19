const todos = {
  /* TEMPLATE:
  'uuid': {
    description: 'Buy milk',
    done: false,
  },
  */
};

function addTodo(text) {
  todos[crypto.randomUUID()] = {
    description: text,
    done: false,
  };
}

function removeTodo(id) {
  delete todos[id];
}

function getTodos() {
  return todos;
}

export { addTodo, removeTodo, getTodos };
