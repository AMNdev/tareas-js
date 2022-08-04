import './styles.css';

// esto sería necesario de no tener centralizado en index.js
// import { Todo } from './classes/todo.class.js';
// import { TodoList } from './classes/todo-list.class';

// al no poner archivo, por defecto busca index
import { Todo, TodoList } from './classes';

import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();


// - todoList.todos.forEach((todo) => crearTodoHtml(todo));
// es lo mismo que (sólo funciona con un solo argumento)
todoList.todos.forEach(crearTodoHtml);



// /todoList.todos[0].imprimirClase();
console.log('todos', todoList.todos);
