import { addTodo, getTodos } from './todo.js';

addTodo('Buy milk');
addTodo('Buy eggs');
addTodo('Buy bread');
addTodo('Buy cheese');

console.table(getTodos());
