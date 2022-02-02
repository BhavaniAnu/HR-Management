import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServService } from 'src/app/services/auth-serv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  reactiveForm: FormGroup;
  haserror: boolean = false;
  login_msg!: string;
  login_user_msg: any
  constructor(private builder: FormBuilder, private authser: AuthServService, private router: Router) {
    this.reactiveForm = builder.group({
      email: "",
      password: "",
      checkbox: ""
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem('token') != null) {
      this.router.navigate(['/home']);
    }

  }
  employeeSubmit(value: any) {
    this.authser.loginUser(value)
      .subscribe((res: any) => {
        console.log("Token reterive successful", res.token)
        this.haserror = false;
        this.login_msg = 'Login in, Please wait... !!!';
        localStorage.setItem('token', res.token);
        this.router.navigate(['/home']);
      },
        error => {
          console.log("user login error", error.error);
          this.haserror = true;
          this.login_user_msg = 'Invalid Username and Password !!!';
        });
  }
}
