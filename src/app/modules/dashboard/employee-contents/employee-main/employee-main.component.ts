import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-main',
  templateUrl: './employee-main.component.html',
  styleUrls: ['./employee-main.component.scss']
})
export class EmployeeMainComponent implements OnInit {


  constructor(private employeeservice:EmployeeService) { }

  ngOnInit(): void {
  }

}
