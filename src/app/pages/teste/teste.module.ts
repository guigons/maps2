import { ItemTesteComponent } from './item-teste/item-teste.component';
import { HttpClientModule } from '@angular/common/http';
import { TesteComponent } from './teste.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    TesteComponent,
    ItemTesteComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: '', component: TesteComponent},
      { path: ':idTeste', component: ItemTesteComponent},
    ])
  ]
})
export class TesteModule { }
