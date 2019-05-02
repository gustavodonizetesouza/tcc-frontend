import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//controlador da app.html

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //pagina que será carregado ao abrir o app
  rootPage: string = 'HomePage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
