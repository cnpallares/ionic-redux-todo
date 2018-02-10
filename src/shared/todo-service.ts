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

  constructor(public http: HttpClient) {
    console.log("Hello TodoServiceProvider Provider");
  }

  addTodo(todo: TodoModel) {
    this.todos.push(todo);
  }

  toggleTodo(todo: TodoModel) {
    return (todo.isDone = !todo.isDone);
  }

  removeTodo(todo: TodoModel) {
    const index = this.todos.indexOf(todo);
    this.todos = [
      ...this.todos.slice(0, index),
      ...this.todos.slice(index + 1)
    ];
  }
}
