import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';

@IonicPage()
@Component({
  selector: 'page-sair',
  templateUrl: 'sair.html',
})
export class SairPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public auth: AuthService,
    private app: App) 
    {
  }

  ionViewDidLoad() {
    this.auth.logout();
    this.app.getRootNav().setRoot('HomePage');
  }

}
