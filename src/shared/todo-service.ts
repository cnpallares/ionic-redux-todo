import { Injectable } from "@angular/core";
import { Platform } from "ionic-angular";
import { HttpClient } from "@angular/common/http";

import { TodoModel } from "./todo.model";
import { ListModel } from "./list-mode";

@Injectable()
export class TodoService {
  private todos: TodoModel[] = [];

  constructor(public http: HttpClient) {
    console.log("Hello TodoServiceProvider Provider");
  }

  loadTodos(list: ListModel) {
    this.todos = [];
  }

  addTodo(todo: TodoModel) {
    this.todos = [...this.todos, todo];
  }

  toggleTodo(todo: TodoModel) {
    const isDone = !todo.isDone;
    const index = this.todos.indexOf(todo);
    const toggledTodo = new TodoModel(
      todo.description,
      isDone,
      todo.isImportant
    );

    this.todos = [
      ...this.todos.slice(0, index),
      toggledTodo,
      ...this.todos.slice(index + 1)
    ];
  }

  removeTodo(todo: TodoModel) {
    const index = this.todos.indexOf(todo);
    this.todos = [
      ...this.todos.slice(0, index),
      ...this.todos.slice(index + 1)
    ];
  }

  updateTodo(originalTodo: TodoModel, modifiedTodo: TodoModel) {
    const index = this.todos.indexOf(originalTodo);
    this.todos = [
      ...this.todos.slice(0, index),
      modifiedTodo,
      ...this.todos.slice(index + 1)
    ];
  }
}
