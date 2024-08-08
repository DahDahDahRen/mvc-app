const model = () => {
  let _todos;

  if (!localStorage.getItem("newTodos")) {
    _todos = [];
  } else {
    _todos = JSON.parse(localStorage.getItem("newTodos"));
  }

  const _addTodos = (newTodo) => {
    _todos.push(newTodo);
  };

  const _deleteTodos = (todoId) => {
    _todos = _todos.filter((todo) => todo.id !== Number(todoId));

    console.log(_todos);
  };

  const _saveTodosToLocalStorage = () => {
    localStorage.setItem("newTodos", JSON.stringify(_todos));
  };

  return {
    todos: _todos,
    addTodo: _addTodos,
    deleteTodo: _deleteTodos,
    saveTodosToLocalStorage: _saveTodosToLocalStorage,
  };
};

export default model;
