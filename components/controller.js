import model from "./model.js";
import view from "./view.js";

//! Controller
class Controller {
  constructor(model, view = null) {
    this.model = model;
    this.view = view;
  }

  //! Populate DOM
  _populateTodoList() {
    this.view.listTodo.innerHTML = "";

    this.model.todos.forEach((todo) => {
      const html = this.view.generateMarkup(todo);
      this.view.listTodo.insertAdjacentHTML("afterbegin", html);
    });
  }

  //! Add todo controoler
  _addTodoController() {
    this.view.btnAddTodo.addEventListener("click", (e) => {
      //* Prevent default
      e.preventDefault();

      //? Check if input is empty
      if (!this.view.inputTodo.value) {
        alert("Input is empty!");
      } else {
        //* Create new todo object
        const todo = {
          id: this.model.todos.length + 1,
          item: this.view.inputTodo.value,
        };

        //* Generate a HTML markup
        const html = this.view.generateMarkup(todo);

        //* Add todo to todos in model
        this.model.addTodo(todo);

        //* Insert to do in UI
        this.view.listTodo.insertAdjacentHTML("afterbegin", html);

        //* Save to do in local storage
        this.model.saveTodosToLocalStorage();
      }
    });
  }

  //! Delete Todo
  _deleteTodoItemController() {
    this.view.listTodo.addEventListener("click", (e) => {
      if (e.target.classList.contains("btn-delete")) {
        const todoItem = e.target.closest(".todo-item");

        const id = todoItem.dataset.id;

        this.model.deleteTodo(id);

        todoItem.remove();

        this.model.saveTodosToLocalStorage();
      }
    });
  }

  //! Populate the UI with todos save in local storage
  _initialDOMLoadController() {
    //* Listen for DOM content event
    document.addEventListener("DOMContentLoaded", (e) => {
      this._populateTodoList();
    });
  }

  //! Init method
  init() {
    this._initialDOMLoadController();
    this._addTodoController();
    this._deleteTodoItemController();
  }
}

const controller = new Controller(model(), view());

export default controller;
