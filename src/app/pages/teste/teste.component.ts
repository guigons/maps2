import { WebsocketsService } from '../../smart/db/websockets.service';
import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/router.service';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { TesteService } from './teste.service';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss'],
})
export class TesteComponent implements OnInit {

  public testes$: Observable<any[]>;

  constructor(
    private go: RouterService,
    private testeService: TesteService
  ) { 

  }

  ngOnInit() {

    this.testes$ = this.testeService.snapshotChanges();
   
  } 


}
