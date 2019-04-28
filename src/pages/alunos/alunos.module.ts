import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlunosPage } from './alunos';

@NgModule({
  declarations: [
    AlunosPage,
  ],
  imports: [
    IonicPageModule.forChild(AlunosPage),
  ],
})
export class AlunosPageModule {}
