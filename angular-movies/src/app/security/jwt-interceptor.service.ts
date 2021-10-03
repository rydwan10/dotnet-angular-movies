import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root',
})
export class JwtInterceptorService implements HttpInterceptor {
  constructor(private _securityService: SecurityService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this._securityService.getToken();
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    console.log('Req', req);
    return next.handle(req);
  }
}
