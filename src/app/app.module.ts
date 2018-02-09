import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { AddTaskModalPage } from "./../pages/add-task-modal/add-task-modal";
import { TodosPage } from "../pages/todos/todos";
import { MyApp } from "./app.component";

@NgModule({
  declarations: [MyApp, TodosPage, AddTaskModalPage],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, TodosPage, AddTaskModalPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
