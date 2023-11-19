import { addTodo, getTodo } from './todo.js';

addTodo('Buy milk');
addTodo('Buy eggs');
addTodo('Buy bread');
const uuid = addTodo('Buy cheese');

console.table(getTodo());
console.table(getTodo('uuid'));
console.table(getTodo(uuid));
