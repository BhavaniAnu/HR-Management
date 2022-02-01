import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
      path: '', component: LoginComponent, children: [
        { path: 'login', component: LoginComponent  }
        // { path: 'resetpassword', component: ResetPasswordComponent },
        // { path: 'forgotpassword', component: ForgotPasswordComponent }
      ]
  },
  // { path: 'register', component: RegisterComponent }
// {
//   path:'/login',component:LoginComponent
// }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
