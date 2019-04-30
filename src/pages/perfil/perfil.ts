import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageService } from '../../services/storage.service';


@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  email: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: StorageService
    ) {
  }

  ionViewDidLoad() {
    let usuario = this.storage.get();
    if (usuario && usuario.email){
      this.email = usuario.email;
    }
    
  }

}
