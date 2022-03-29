import { HttpClient, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, Subject, throwError } from 'rxjs';
import { Constant } from '../constants/authconstant';
@Injectable({
  providedIn: 'root'
})
export class AuthServService {


  private loginUrl = Constant.API_ENDPOINT + '/auth/login';
  private logoutURL = Constant.API_ENDPOINT +'/auth/logout';
  private _client_id = 'demo-client';
  private _client_secret = 'demo-secret';
  private tokenHeader = {
    'Authorization': 'Basic ' + btoa(this._client_id + ':' + this._client_secret),
    'Content-Type': 'application/x-www-form-urlencoded'
  };
  loginData: any;
  userData: any;
  searchTerm = new Subject<any>()


  constructor(private http:HttpClient, private router:Router) {
    this.searchTerm.asObservable();

   }
  public loginUser(value:any){
    this.loginData = value;
    return this.http.post(this.loginUrl,value);
   }

   refreshToken(request: HttpRequest<any>, next: HttpHandler) {

    if (localStorage.getItem('token') != null) {
      this.callRefreshToken()
        .subscribe(res => {
          console.log('Token retrieve successful', res);
          localStorage.setItem('token', res.token);
          next.handle(request);
          location.reload();
        },
          err => {
            // console.log('refresh token also results into error ', err);
            this.logout('logout');
          });
    } else {
      // console.log("Cant use Refresh token");
      this.router.navigate(['/']);
    }
  }

  errorHandler(error: any) {
    console.log('Auth Service api error ', error);
   
   
    return throwError(error);
  }

  callRefreshToken(): Observable<any> {
    localStorage.removeItem('token');
    // console.log("refresh token called ", localStorage.getItem("refreshToken"));

    const data = {
      'grant_type': 'refresh_token',
      'client_id': this._client_id,
      'client_secret': this._client_secret,
      'refresh_token': localStorage.getItem('token')
    };

    return this.http.post<any>(this.loginUrl, data, { headers: this.tokenHeader })
      .pipe(catchError(this.errorHandler));
  }

   isAdmin() {
    return localStorage.getItem('user') === 'admin';
  }

   logout(logout:any) {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.clear();
    this.router.navigate(['/']);
    return this.http.post<any>(this.logoutURL,'logout')
   }

}
