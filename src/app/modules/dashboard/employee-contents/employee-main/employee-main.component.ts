import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-main',
  templateUrl: './employee-main.component.html',
  styleUrls: ['./employee-main.component.scss']
})
export class EmployeeMainComponent implements OnInit {


  constructor(private employeeservice:EmployeeService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  nav1(){
    this.router.navigateByUrl("employees/newEmployee")
  }
  nav2(){
    this.router.navigate(['employees/details'])
  }
}
