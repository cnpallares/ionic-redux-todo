import { PrioritizedTodosPipe } from "../pipes/prioritized-todos/prioritized-todos";
import { AddTaskModalPage } from "./../pages/add-task-modal/add-task-modal";
import { DoneTodosPipe } from "./../pipes/done-todos/done-todos";
import { ListService } from "./../shared/list-service";
import { TodoService } from "./../shared/todo-service";
import { ListsPage } from "./../pages/lists/lists";
import { TodosPage } from "../pages/todos/todos";
import { MyApp } from "./app.component";

import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { ErrorHandler, NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";

import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { IonicStorageModule } from "@ionic/storage";

@NgModule({
  declarations: [
    PrioritizedTodosPipe,
    AddTaskModalPage,
    DoneTodosPipe,
    TodosPage,
    ListsPage,
    MyApp
  ],
  imports: [
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    BrowserModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, TodosPage, AddTaskModalPage, ListsPage],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SplashScreen,
    TodoService,
    ListService,
    StatusBar
  ]
})
export class AppModule {}
