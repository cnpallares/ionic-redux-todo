import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ListModel } from "./list-mode";
import { Storage } from "@ionic/storage";
import { TodoModel } from "./todo.model";

@Injectable()
export class ListService {
  public lists: ListModel[] = [];

  constructor(public http: HttpClient, public localStorage: Storage) {
    this.getLists();
  }

  private getLists() {
    this.getFromLocalStorage();
  }

  public addList = (name: string) => {
    let list = new ListModel(name, this.lists.length);
    this.lists = [...this.lists, list];
    return list;
  };

  getFromLocalStorage() {
    this.localStorage
      .ready()
      .then(() => {
        this.localStorage.get("lists").then((data: any[]) => {
          let list: ListModel[] = [];
          if (data) {
            list = data.map(x => new ListModel(x.name, x.id));
          }
          this.lists = list;
        });
      })
      .catch(error => console.log("STORAGE ERROR:::", error));
  }

  saveLocally() {
    this.localStorage.ready().then(() => {
      this.localStorage.set("lists", this.lists);
    });
  }
}
