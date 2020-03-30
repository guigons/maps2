import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let sessaoId = localStorage.getItem("sessaoId");
    const changedReq = req.clone({ 
                                    headers: req.headers.set('Authorization',
                                    sessaoId?sessaoId:'')
                                  });
    // console.log('INTERPCEPTOR!');                
    // console.log(changedReq);
    return next.handle(changedReq);
  }

}