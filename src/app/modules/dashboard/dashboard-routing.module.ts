import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashHomeComponent } from './dash-home/dash-home.component';
import { EmployeeDetailsComponent } from './employee-contents/employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-contents/employee-list/employee-list.component';
import { EmployeeMainComponent } from './employee-contents/employee-main/employee-main.component';
import { EmployeeManageComponent } from './employee-contents/employee-manage/employee-manage.component';
import { ProfileComponent } from './profile/profile/profile.component';

const routes: Routes = [
  { path: 'home', component: DashHomeComponent},
      {
        path: 'employees',
        component: EmployeeMainComponent,
        children: [
           { path: '', redirectTo: 'details', pathMatch: 'full' },
          { path: 'details', component: EmployeeListComponent },
          { path: 'details/:id', component: EmployeeDetailsComponent },
          { path: 'new', component: EmployeeManageComponent },
        ]
      },
      {path:'profile',component:ProfileComponent},
    ]
@NgModule({
    imports: [CommonModule,
       RouterModule.forChild(routes)
      ],
    exports: [RouterModule]
  })
export class DashboardRoutingModule { }
