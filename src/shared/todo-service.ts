import { Platform } from "ionic-angular";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TodoModel } from "./todo.model";

/*
  Generated class for the TodoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoService {
  private todos: TodoModel[] = [];

  constructor(public http: HttpClient, private platform: Platform) {
    console.log("Hello TodoServiceProvider Provider");
  }

  addTodo(todo: TodoModel) {
    // impure add todo
    // this.todos.push(todo);
    // pure add todo
    this.todos = [...this.todos, todo];
  }

  toggleTodo(todo: TodoModel) {
    setTimeout(() => {
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
    }, this.platform.is("ios") ? 0 : 300);
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
