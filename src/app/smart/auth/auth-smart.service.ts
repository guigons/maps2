import { WebsocketsService } from './../db/websockets.service';
import { Sessao } from './../models/sessao';
import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Credencial, AuthResponse } from '../models/credencial';
import { Observable, observable, Subject } from 'rxjs';
import { SmartConfig } from '../models/smart-config';
import { take, map, debounce, tap, switchMap } from 'rxjs/operators';
import * as jwt_decode from "jwt-decode";
import { RouterService } from 'src/app/router.service';


@Injectable({
  providedIn: 'root'
})

export class AuthSmartService {

  private sessao: Sessao;

  constructor(
    protected http: HttpClient,
    private go: RouterService,
    private ws: WebsocketsService,
    @Inject('config') public config: SmartConfig,
  ) { 
    
    this.registrarSessao();
    this.ws.connect();

  }

  autenticarUsuario(credencial: Credencial): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.config.api.url + '/autenticacao', credencial).pipe(
      take(1),
      map(rst => { 
        if (rst.auth) { 
          this.setSessaoId(rst.sessaoId);
          this.registrarSessao();
          this.ws.connect();
          this.go.navigate([this.config.rotas.home]);
        }else{
          this.removeSessaoId();
          this.sessao = null;
        }
        return rst;
      })
    )
  }

  setSessaoId(sessaoId: string) {
    localStorage.setItem('sessaoId', sessaoId);
  }

  getSessaoId(): string {
    return localStorage.getItem('sessaoId');
  }

  removeSessaoId(){
    return localStorage.removeItem('sessaoId');
  }

  registrarSessao(): void {
    let sessaoId = this.getSessaoId();
    if (sessaoId) { 
      this.sessao = jwt_decode(sessaoId);
      console.log('SESSAO', this.sessao);
    }
  }

  getSessao() {
    return this.sessao;
  }

  logout() {
    localStorage.clear();
    this.sessao = null;
    this.go.navigate([this.config.rotas.login]);
    this.ws.disconnect();
  }

}
