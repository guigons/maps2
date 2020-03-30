import { AuthSmartService } from './../../../smart/auth/auth-smart.service';
import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/router.service';
import { AlertController, ToastController } from '@ionic/angular';
import { Credencial, FormCredencial } from 'src/app/smart/models/credencial';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.scss'],
})
export class EntrarComponent implements OnInit {

  public formCredential: FormCredencial;

  constructor(
    private auth: AuthSmartService,
    public go: RouterService,
    public toastController: ToastController
  ) { }

  ngOnInit() { 

    let credencial = new Credencial(null,null);
    this.formCredential = new FormCredencial(credencial);

  }

  entrar() {
    
    let credencial: Credencial = this.formCredential.value;
    this.auth.autenticarUsuario(credencial).subscribe(response => {
      if (!response.auth && response.erro) this.presentToast(response.erro);
    });

  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: 'top',
      color: 'danger'
    });
    toast.present();
  }

  onKeyDown(e){
    //Enter
    if (e.key === "Enter") this.entrar();
  }


}
