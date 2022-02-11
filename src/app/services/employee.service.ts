import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { Constant } from '../constants/authconstant';
import { AuthServService } from './auth-serv.service';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 apiUrl=Constant.API_ENDPOINT+'/employees'
  userData: any;
  constructor(private http:HttpClient, private router:Router, private authSer:AuthServService) { 

  }


  errorHandler(error: any) {
    console.log('Employee api error ', error);
    return throwError(error);
  }
   getAllEmployeess(){
    return this.http.get<any>(this.apiUrl) .pipe(catchError(this.errorHandler));
  }

}
