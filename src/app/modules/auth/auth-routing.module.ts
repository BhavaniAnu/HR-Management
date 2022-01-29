import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
//   {
//       path: '', component: LoginHomeComponent, children: [
//         { path: 'login', component: LoginComponent  },
//         { path: 'resetpassword', component: ResetPasswordComponent },
//         { path: 'forgotpassword', component: ForgotPasswordComponent }
//       ]
//   },
//   { path: 'register', component: RegisterComponent }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
