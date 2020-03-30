import { AuthSmartService } from '../auth/auth-smart.service';

import { Observable} from 'rxjs';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable, NgZone, Inject } from '@angular/core';
import { RouterService } from '../../router.service';
import { SmartConfig } from '../models/smart-config';

@Injectable()

export class AuthGuard implements CanActivate {

  private data:Observable<boolean>;

  constructor(
    @Inject('config') public config: SmartConfig,
    private go: RouterService,
    private auth: AuthSmartService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean>|Promise<boolean>|boolean {

    let sessao = this.auth.getSessao();
    if (!sessao) {
      return true;
    } else {
      this.go.navigate([this.config.rotas.home],'root');
      return false;
    }

  }
  
}