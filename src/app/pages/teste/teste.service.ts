import { DBSmart } from '../../smart/db/db-smart';
import { HttpClient } from '@angular/common/http';
import { Teste } from './../../models/teste';
import { Injectable, Inject } from '@angular/core';
import { WebsocketsService } from 'src/app/smart/db/websockets.service';
import { SmartConfig } from 'src/app/smart/models/smart-config';

@Injectable({
  providedIn: 'root'
})
export class TesteService extends DBSmart<Teste>{

  constructor(protected http: HttpClient, public ws: WebsocketsService, @Inject('config') public config: SmartConfig) {
    super(http,ws,config,'/testes');
  }

}
