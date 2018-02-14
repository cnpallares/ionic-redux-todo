import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { TodosPage } from "../pages/todos/todos";
import { ListsPage } from "../pages/lists/lists";

import { Component } from "@angular/core";
import { Platform } from "ionic-angular";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  rootPage: any = ListsPage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
