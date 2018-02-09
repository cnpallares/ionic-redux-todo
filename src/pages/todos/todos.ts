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
  public todos: any[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad TodosPage");
    this.todos = [
      new TodoModel("This one an element", true, false),
      new TodoModel("This two an element", true, false),
      new TodoModel("This three an element", true, false)
    ];
  }

  setTodoStyles(todo: TodoModel) {
    let styles = {
      "text-decoration": todo.isDone ? "line-through" : "none",
      "font-weight": todo.isImportant ? "font-weight" : "600"
    };
    return styles;
  }

  toggleTodo(todo: TodoModel) {
    return (todo.isDone = !todo.isDone);
  }

  showAddTodo() {
    const modal = this.modalCtrl.create(AddTaskModalPage);
    modal.present();

    modal.onDidDismiss(data => {
      if (data) {
        this.addTodo(data);
      }
    });
  }

  addTodo(todo: TodoModel) {
    this.todos.push(todo);
  }
}
