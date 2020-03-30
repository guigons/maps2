import { ModalConfirmacaoComponent } from './modal-confirmacao/modal-confirmacao.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    FormDebugComponent,
    ModalConfirmacaoComponent
  ],
  entryComponents: [
    FormDebugComponent,
    ModalConfirmacaoComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    FormDebugComponent,
    ModalConfirmacaoComponent,
  ]
})
export class SharedModule { }
