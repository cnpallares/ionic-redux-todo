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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    if (this.navParams.get("todo")) {
      this.model = TodoModel.clone(this.navParams.get("todo"));
    }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AddTaskModalPage");
  }

  dismiss() {
    this.viewCtrl.dismiss(this.model);
  }

  submit() {
    this.dismiss();
  }
}
