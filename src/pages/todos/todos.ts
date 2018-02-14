import { AddTaskModalPage } from "./../add-task-modal/add-task-modal";
import { TodoService } from "./../../shared/todo-service";
import { TodoModel } from "./../../shared/todo.model";

import { Component } from "@angular/core";

import {
  IonicPage,
  NavController,
  NavParams,
  ModalController,
  Platform
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
  private toogleTodoTimeout = null;
  constructor(
    public modalCtrl: ModalController,
    public todoService: TodoService,
    public navCtrl: NavController,
    public navParams: NavParams,
    private platform: Platform
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad TodosPage");
  }

  setTodoStyles(todo: TodoModel) {
    let styles = {
      "text-decoration": todo.isDone ? "line-through" : "none",
      "font-weight": todo.isImportant ? "600" : "normal"
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
    if (this.toogleTodoTimeout) {
      return;
    } else {
      this.toogleTodoTimeout = setTimeout(() => {
        this.todoService.toggleTodo(todo);
        this.toogleTodoTimeout = null;
      }, this.platform.is("ios") ? 0 : 300);
    }
  }

  removeTodo(todo: TodoModel) {
    this.todoService.removeTodo(todo);
  }

  showEditTodo(todo: TodoModel) {
    const modal = this.modalCtrl.create(AddTaskModalPage, { todo });
    modal.present();

    modal.onDidDismiss(data => {
      if (data) {
        console.log("Data to be updated => ", data);
        this.todoService.updateTodo(todo, data);
      }
    });
  }
}
