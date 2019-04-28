import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'  //referencia para qual arquivo é controlado por este controlador
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  login(){
    this.navCtrl.setRoot(TabsPage);
  }

}
