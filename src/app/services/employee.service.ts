import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {  catchError, Subject, throwError } from 'rxjs';
import { Constant } from '../constants/authconstant';
import { AuthServService } from './auth-serv.service';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  apiUrl = Constant.API_ENDPOINT;
  userData: any;
  userSubject = new Subject;
  userid = new Subject<any>();
  constructor(private http: HttpClient, private router: Router, private authSer: AuthServService) {
    this.userSubject.asObservable();
    this.userid.asObservable();

  }

  errorHandler(error: any) {
    console.log('Employee api error ', error);
    return throwError(error);
  }

  public getAllEmployeess() {
    return this.http.get<any>(this.apiUrl + '/employees').pipe(catchError(this.errorHandler));
  }

  public getEmployeeById(id: any) {
    return this.http.get<any>(this.apiUrl+'/employees/'+id).pipe(catchError(this.errorHandler));
  }

  public updateEmployee(value:any){
    return this.http.patch<any>(this.apiUrl+'/employees/'+value.empId,value).pipe(catchError(this.errorHandler))
  }



}
