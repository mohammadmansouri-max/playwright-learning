let todos = [];

function addTodo(task) {
    todos.push(task);
}

function removeTodo(index) {
    if (index >= 0 && index < todos.length) {
        todos.splice(index, 1);
    }
}

function listTodos() {
    todos.forEach((todo, index) => {
        console.log(`${index}: ${todo}`);
    });
}

// Example usage
addTodo("Learn JavaScript");
addTodo("Build a todo app");
addTodo("Test the app");
listTodos();
removeTodo(0);
listTodos();


removeTodo(1);

console.log("Efter borttagning:");
listTodos();