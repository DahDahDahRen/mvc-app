const view = () => {
  const _todoInput = document.querySelector("#input-todo");
  const _addTodoBtn = document.querySelector("#add-todo");
  const _todoListParent = document.querySelector("#todo-list");

  const _generateMarkup = (content) => {
    return `<li class="todo-item" data-id=${content.id}><p>${content.item}</p> <button class="btn-delete">DELETE</button></li>`;
  };

  return {
    btnAddTodo: _addTodoBtn,
    inputTodo: _todoInput,
    listTodo: _todoListParent,
    generateMarkup: _generateMarkup,
  };
};

export default view;
