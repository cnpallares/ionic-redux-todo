import { TodoService } from "./../../shared/todo-service";
import { AddTaskModalPage } from "./../add-task-modal/add-task-modal";
import { TodoModel } from "./../../shared/todo.model";

import { Component } from "@angular/core";

import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";

/**
 * Generated class for the TodosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-todos",
  templateUrl: "todos.html"
})
export class TodosPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public todoService: TodoService
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad TodosPage");
  }

  setTodoStyles(todo: TodoModel) {
    let styles = {
      "text-decoration": todo.isDone ? "line-through" : "none",
      "font-weight": todo.isImportant ? "font-weight" : "600"
    };
    return styles;
  }

  showAddTodo() {
    const modal = this.modalCtrl.create(AddTaskModalPage);
    modal.present();

    modal.onDidDismiss(data => {
      if (data) {
        this.todoService.addTodo(data);
      }
    });
  }

  toggleTodo(todo: TodoModel) {
    this.todoService.toggleTodo(todo);
  }

  removeTodo(todo: TodoModel) {
    this.todoService.removeTodo(todo);
  }
}
