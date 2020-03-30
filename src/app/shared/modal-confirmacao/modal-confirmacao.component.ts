import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-confirmacao',
  templateUrl: './modal-confirmacao.component.html',
  styleUrls: ['./modal-confirmacao.component.scss'],
})
export class ModalConfirmacaoComponent implements OnInit {

  public texto: string;
  public titulo: string;
  public okTexto: string;
  public cancelarTexto: string;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams
    ) {
  }

  ngOnInit() {
    this.texto = this.navParams.get('texto');
    this.titulo = this.navParams.get('titulo');
    this.okTexto = this.navParams.get('okTexto');
    this.cancelarTexto = this.navParams.get('cancelarTexto');
  }

  sim(){
    this.modalController.dismiss('sim');
  }

  nao(){
    this.modalController.dismiss('nao');
  }



}
