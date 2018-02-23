import { ListsService } from "./../../shared/lists-service";
import { TodosPage } from "./../todos/todos";
import { Component, OnInit } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  AlertOptions
} from "ionic-angular";

/**
 * Generated class for the ListsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-lists",
  templateUrl: "lists.html"
})
export class ListsPage implements OnInit {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public listService: ListsService
  ) {}

  ngOnInit() {
    console.log("ListPage On Init");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ListsPage");
  }

  goToList() {
    this.navCtrl.push(TodosPage);
  }

  addNewList = (name: string) => {
    console.log("Name added: ", name);
    this.listService.addList(name);
  };

  showAddList() {
    console.log("Show add list");
    const options: AlertOptions = {
      title: "New list",
      message: "Give a name to the new list",
      inputs: [
        {
          name: "name",
          placeholder: "Name"
        }
      ],
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Add",
          handler: data => {
            console.log("Handler data => ", data);
            this.addNewList(data.name);
          }
        }
      ]
    };
    let addListAlert = this.alertCtrl.create(options);
    addListAlert.present();
  }
}
