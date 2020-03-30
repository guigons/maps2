import { NavController } from '@ionic/angular';
import { Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(
    private ngZone: NgZone,
    private navCtrl: NavController,
  ) { 
  }

  public navigate(rota,direction?){
    if (direction){
      if (direction === 'forward'){
        this.ngZone.run(() => this.navCtrl.navigateForward(rota)).then();
      }else if (direction === 'back'){
        this.ngZone.run(() => this.navCtrl.navigateBack(rota)).then();
      }else if (direction === 'root'){
        this.ngZone.run(() => this.navCtrl.navigateRoot(rota)).then();
      }else{
        this.ngZone.run(() => this.navCtrl.navigateForward(rota)).then();
      }
    }else{
      if (rota === 'back') { 
        this.ngZone.run(() => this.navCtrl.back());
      } else {
        this.ngZone.run(() => this.navCtrl.navigateForward(rota)).then();
      }
    }
  }

}
