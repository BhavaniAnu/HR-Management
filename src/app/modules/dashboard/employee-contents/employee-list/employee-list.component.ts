import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {


  constructor(private employee:EmployeeService) { 
    const user = this.employee.userData 
  }

 public ngOnInit(): void {
   this.getAllUsers();
  }
 
  getAllUsers(){
    this.employee.getAllEmployeess().subscribe((res:any)=>{
      console.log(res)
    })
  }
}
