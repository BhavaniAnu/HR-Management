import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthServService } from './auth-serv.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(private _auth: AuthServService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let apiRequest:any;
    if (localStorage.getItem('token') != null) {
      apiRequest = this.tokenizeReq(request);
    } else { apiRequest = this.normalReq(request); }

    return next
      .handle(apiRequest)
      .pipe(
        // tap((ev: HttpEvent<any>) => {

        // }),
        catchError(response => {
          if (response instanceof HttpErrorResponse) {
            switch (response.status) {
              case 401:
              // console.log('call refresh token');
              this._auth.refreshToken(apiRequest, next);
              break;
            }
            // console.log('Processing http error', response);
          }

          return throwError(response);
        })
      );
  }

  tokenizeReq(request: HttpRequest<any>) {
    return request.clone({
      setHeaders: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }
    });
  }

  normalReq(request: HttpRequest<any>) {
    return request.clone({});
  }
}
