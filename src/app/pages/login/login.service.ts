// import { Credencial } from './../../models/credencial';
// import { Sessao } from './../../models/sessao';
// import { api_server } from './../../global';
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable()
// export class LoginService {

//   private server: string = api_server
//   private sessao: Sessao = new Sessao(null,null,null,null);

//   constructor(
//     private http: HttpClient
//   ) { }

//   setSessaoId(idSessao: string) {
//     localStorage.setItem('sessaoId', idSessao);
//   }

//   getSessaoId(): string {
//     return localStorage.getItem('sessaoId');
//   }

//   autenticarUsuario(credenciais: Credencial): Observable<{ auth: Boolean, sessaoId: string, usuario: any }> {
//     return this.http.post<any>(this.server + 'autenticacao', credenciais);
//   }

//   registrarUsuarioAutenticado(dados): void {
//     this.sessao._id = dados.usuario._id;
//     this.sessao.primeiroNome = dados.usuario.primeiroNome;
//     this.sessao.ultimoNome = dados.usuario.ultimoNome;
//     this.sessao.usuario = dados.usuario.usuario;
//     this.sessao.permissoes = dados.permissoes;
//   }

//   getSessao() {
//     return this.sessao;
//   }

//   getUsuarioBySessaoId(sessaoId: string) {
//     return this.http.post<any>(this.server + 'autenticacao/sessao', {sessaoId: sessaoId});
//   }

//   logout() {
//     localStorage.clear();
//   }

// }
