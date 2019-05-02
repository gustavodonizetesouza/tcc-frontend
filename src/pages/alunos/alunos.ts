import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlunoService } from '../../services/aluno.service';
import { Aluno } from '../../models/aluno';


@IonicPage()
@Component({
  selector: 'page-alunos',
  templateUrl: 'alunos.html',
})
export class AlunosPage {

  items: Aluno;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alunoService: AlunoService
  ) {}

  ionViewDidLoad() {
    this.alunoService.buscarTodos()
    .subscribe(response => {
      this.items = response;
    },
    error => {});
  }
}

