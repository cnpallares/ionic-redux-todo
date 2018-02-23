import { ListsService } from "./../shared/lists-service";
import { ListsPage } from "./../pages/lists/lists";
import { DoneTodosPipe } from "./../pipes/done-todos/done-todos";
import { TodoService } from "./../shared/todo-service";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";

import { AddTaskModalPage } from "./../pages/add-task-modal/add-task-modal";
import { TodosPage } from "../pages/todos/todos";
import { MyApp } from "./app.component";
import { PrioritizedTodosPipe } from "../pipes/prioritized-todos/prioritized-todos";

@NgModule({
  declarations: [
    MyApp,
    TodosPage,
    AddTaskModalPage,
    PrioritizedTodosPipe,
    DoneTodosPipe,
    ListsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, TodosPage, AddTaskModalPage, ListsPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    TodoService,
    ListsService
  ]
})
export class AppModule {}
