import { AuthSmartService } from './auth/auth-smart.service';
import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { SmartConfig } from './models/smart-config';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';
import { NoAuthGuard } from './guards/noauth.guard';
import { AuthInterceptor } from './interceptor/auth-interceptor';

@NgModule({
  declarations: [

  ],
  entryComponents: [

  ],
  imports: [
    HttpClientModule
  ],
  exports: [

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    AuthSmartService,
    AuthGuard,
    NoAuthGuard
  ]
})

export class SmartModule {
  static forRoot(config: SmartConfig): ModuleWithProviders {
    return {
      ngModule: SmartModule,
      providers: [ 
        {provide: 'config', useValue: config}
      ]
    };
  }
}

