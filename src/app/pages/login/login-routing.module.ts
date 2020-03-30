import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoasVindasComponent } from './boas-vindas/boas-vindas.component';
import { EntrarComponent } from './entrar/entrar.component';

const routes: Routes = [
    { path: '', component: EntrarComponent },
    { path: 'entrar', component: EntrarComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LoginRoutingModule {}
