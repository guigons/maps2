import { AuthSmartService } from './../auth/auth-smart.service';
import { Injectable, Inject } from '@angular/core';
import * as io from 'socket.io-client';
import { SmartConfig } from '../models/smart-config';

@Injectable({
  providedIn: 'root'
})

export class WebsocketsService {

  private socket: any;

  constructor(
    @Inject('config') public config: SmartConfig,
  ) {}

  connect(){

    let sessaoId = localStorage.getItem('sessaoId');

    if (sessaoId){
      this.socket = io(this.config.websockets.url, {
        query: { token: sessaoId}
      });
  
      this.socket.on('error', err => {
        console.log('SOCKET ERROR:', err);
      });
    }


  }

  disconnect(){
    this.socket.disconnect();
  }

  getSocket() {
    return this.socket;
  }

}
