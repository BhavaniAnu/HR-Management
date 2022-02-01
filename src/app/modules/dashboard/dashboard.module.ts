import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { EmployeeDetailsComponent } from './employee-contents/employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-contents/employee-list/employee-list.component';
import { EmployeeManageComponent } from './employee-contents/employee-manage/employee-manage.component';
import { EmployeeMainComponent } from './employee-contents/employee-main/employee-main.component';
import { DashHomeComponent } from './dash-home/dash-home.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    EmployeeDetailsComponent,
    EmployeeListComponent,
    EmployeeManageComponent,
    EmployeeMainComponent,
    DashHomeComponent,
    ProfileComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    HttpClientModule
  ],
})
export class DashboardModule { }
