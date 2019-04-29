import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Credenciais } from '../../models/credenciais';
import { AuthService } from '../../services/auth.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'  //referencia para qual arquivo é controlado por este controlador
})
export class HomePage {

  creds: Credenciais = {
    email: "",
    senha: ""
  }

  constructor(
    public navCtrl: NavController,
    public auth: AuthService
  ) {

  }

  login() {
    this.auth.authenticate(this.creds)
      .subscribe(response => {
        this.auth.successfulLogin(response.headers.get('Authorization'));
        this.navCtrl.setRoot('TabsPage');
      },
        error => { });
  }

}
