import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServService } from 'src/app/services/auth-serv.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Injectable({
  providedIn: 'root' // ADDED providedIn root here.
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,private employee:EmployeeService, private authser:AuthServService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
      
      if (localStorage.getItem('token') != null) {
        return true;
      }
      this.router.navigate(['/']);
      return false;
  }
}
