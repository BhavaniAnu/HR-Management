import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashHomeComponent } from './dash-home/dash-home.component';
import { EmployeeDetailsComponent } from './employee-contents/employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-contents/employee-list/employee-list.component';
import { EmployeeMainComponent } from './employee-contents/employee-main/employee-main.component';
import { EmployeeManageComponent } from './employee-contents/employee-manage/employee-manage.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { TimesheetComponent } from './timeSheet/timesheet/timesheet.component';

const routes: Routes = [
  { path: 'home', component: DashHomeComponent},
      {
        path: 'employees',
        component: EmployeeMainComponent,
        children: [
           { path: '', redirectTo: 'details', pathMatch: 'full' },
          { path: 'details', component: EmployeeListComponent },
          { path: 'newEmployee', component: EmployeeManageComponent },
        ]
      },
      {path:'profile',component:ProfileComponent},
      {path:'timeSheet',component:TimesheetComponent}
    ]
@NgModule({
    imports: [CommonModule,
       RouterModule.forChild(routes)
      ],
    exports: [RouterModule]
  })
export class DashboardRoutingModule { }
