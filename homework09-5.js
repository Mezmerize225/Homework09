const todos = [
  { id: 1, task: 'Buy groceries', completed: false },
  { id: 2, task: 'Do homework', completed: true }
];

// function addTodo(task) { /* ... */ }
// function completeTodo(id) { /* ... */ }
// function deleteTodo(id) { /* ... */ }
// function listTodos(filter = 'all') { /* ... */ }

// todos = addTodo(todos, 'Read a book');
// completeTodo(todos, 1);

// console.log(listTodos(todos, 'all'));
// console.log(listTodos(todos, 'completed'));
// console.log(listTodos(todos, 'pending'));

// const uid = (() => (id = 0, () => id++))();
// let j = todos.lastIndexOf();
let j = todos.length;
let uid = j+1;
console.log(uid);

addTodo('buy potato');

function addTodo(task) {
    let obj = { id: uid, task: task, completed: false};
    todos.push(obj);
    console.log(todos);
}