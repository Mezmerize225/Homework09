const todos = [
  { id: 1, task: 'Buy groceries', completed: false },
  { id: 2, task: 'Do homework', completed: true }
];

let id = "id" + Math.random().toString(16).slice(2);
console.log(id);

addTodo('buy potato');
completeTodo(id);
deleteTodo(id);
listTodos('pending');

function addTodo(task) {
    let obj = { id: id, task: task, completed: false};
    todos.push(obj);
    console.log(todos);
}

function completeTodo(id) {
  let obj = todos.find(item => item.id === id );
  if (obj) {
    obj.completed = true;
  }
  console.log(todos);
}

function deleteTodo(id) {
  let obj = todos.find(item => item.id === id );
  const index = todos.indexOf(obj);
  if (index > -1) {
    todos.splice(index, 1);
  }
  console.log(todos);
}

function listTodos(filtered) {
  if (filtered === 'all') {
    console.log(todos);
  } else if ( filtered === 'completed') {
    const newArray = todos.filter(item => item.completed === true);
    console.log(newArray);
  } {
    const newArray = todos.filter(item => item.completed !== true);
    console.log(newArray);
  }
}

