import { SharedModule } from './../../shared/shared.module';
import { BoasVindasComponent } from './boas-vindas/boas-vindas.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EntrarComponent } from './entrar/entrar.component';
import { LoginRoutingModule } from './login-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BoasVindasComponent,
    EntrarComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    
  ]
})
export class LoginModule { }
