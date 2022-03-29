import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { AuthGuard } from './modules/auth/authgaurd';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { InterceptorService } from './services/interceptor.service';
import { HeaderComponent } from './shared/header/header.component';
import {MatDialogModule,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { EmployeeDetailsComponent } from './modules/dashboard/employee-contents/employee-details/employee-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DashboardModule,
    AuthModule,
    RouterModule,
    AppRoutingModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    EmployeeDetailsComponent 
],
  providers: [AuthGuard,{ provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true},{ 
      provide: MatDialogRef,
      useValue: []
       }, 
      { 
      provide: MAT_DIALOG_DATA, 
      useValue: [] 
      }],
  bootstrap: [AppComponent]
})
export class AppModule { }
