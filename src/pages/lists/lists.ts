import { Component, OnInit } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  AlertOptions
} from "ionic-angular";

import { ListService } from "./../../shared/list-service";
import { TodosPage } from "./../todos/todos";
import { ListModel } from "../../shared/list-mode";

@IonicPage()
@Component({
  selector: "page-lists",
  templateUrl: "lists.html"
})
export class ListsPage implements OnInit {
  constructor(
    public alertCtrl: AlertController,
    public listService: ListService,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ngOnInit() {
    console.log("ListPage On Init");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ListsPage");
  }

  goToList(list: ListModel) {
    this.navCtrl.push(TodosPage, { list });
  }

  addNewList = (name: string) => {
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
            this.addNewList(data.name);
          }
        }
      ]
    };
    let addListAlert = this.alertCtrl.create(options);
    addListAlert.present();
  }
}
