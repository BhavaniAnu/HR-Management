import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { AuthServService } from 'src/app/services/auth-serv.service';
import { AuthGuard } from '../auth/authgaurd';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ApplyWorkFromHomeComponent } from './leave-contents/apply-work-from-home/apply-work-from-home.component';
import { SearchPipe } from 'src/app/shared/header/pipes/search.pipe';
import { TimesheetComponent } from './timeSheet/timesheet/timesheet.component';
@NgModule({
  declarations: [
    EmployeeDetailsComponent,
    EmployeeListComponent,
    EmployeeManageComponent,
    EmployeeMainComponent,
    DashHomeComponent,
    ProfileComponent,
    ApplyWorkFromHomeComponent,
    SearchPipe,
    TimesheetComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    HttpClientModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  providers: [AuthServService, AuthGuard],
})
export class DashboardModule {}
