import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ListModel } from "./list-mode";

@Injectable()
export class ListService {
  public lists: ListModel[] = [];

  constructor(public http: HttpClient) {
    this.getLists();
  }

  private getLists() {
    this.lists = [
      new ListModel("List #1", 1),
      new ListModel("List #2", 2),
      new ListModel("List #3", 3),
      new ListModel("List #4", 4),
      new ListModel("List #5", 5),
      new ListModel("List #6", 6)
    ];
  }

  public addList = (name: string) => {
    let list = new ListModel(name, this.lists.length);
    this.lists = [...this.lists, list];
  };
}
