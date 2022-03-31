import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AuthServService } from 'src/app/services/auth-serv.service';

import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  employees: any;
  emp: boolean = true;
  finalDataArray = [];
  searchText: any;

  //  public modalRef?: BsModalRef;

  constructor(
    private employee: EmployeeService,
    public dialog: MatDialog,
    private authSer: AuthServService
  ) {}

  public ngOnInit(): void {
    const user = this.employee.userData;
    this.getAllUsers();

    this.authSer.searchTerm.subscribe((res: string) => {
      this.search(res);
    });
  }

  public getAllUsers() {
    this.employee.getAllEmployeess().subscribe((employees: any) => {
      this.employees = Object.values(employees.data.data);
    });
  }
  public onclick(email: any) {
    this.employee.userSubject.next(email);
  }

  openDialog(employee: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = dialogConfig.minWidth = '800px';
    dialogConfig.hasBackdrop = false;
    dialogConfig.data = {
      employeeName: employee,
      popupopen: true,
    };
    const dialogRef = this.dialog.open(EmployeeDetailsComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  search(value: string) {
    this.searchText = value;
  }
}
