import { TodoModel } from "./../../shared/todo.model";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ViewController } from "ionic-angular/navigation/view-controller";

/**
 * Generated class for the AddTaskModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-add-task-modal",
  templateUrl: "add-task-modal.html"
})
export class AddTaskModalPage {
  public model = new TodoModel("");
  public title: string = "Add new Task";
  public buttonText: string = "Add";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    if (this.navParams.get("todo")) {
      this.model = TodoModel.clone(this.navParams.get("todo"));
      this.title = "Edit task";
      this.buttonText = "Save changes";
    }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AddTaskModalPage");
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  submit() {
    this.viewCtrl.dismiss(this.model);
  }
}
