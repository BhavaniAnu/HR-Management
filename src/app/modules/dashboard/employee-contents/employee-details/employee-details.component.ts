import { Component, Inject, Input, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  @Input() string:any
  user: any;
  maindata: any;
  updateForm:FormGroup;
  clicked:any;
  constructor(private employeeservice:EmployeeService,public dialogRef: MatDialogRef<EmployeeDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any, private builder: FormBuilder) { 
    this.maindata = data;
    this.updateForm = builder.group({
      name: "",
      empId: "",
      email:""
    });
  }

  ngOnInit(): void {
  }

  public employeeSubmit(value:any){
    console.log(value)
   this.employeeservice.updateEmployee(value).subscribe((res:any)=>{
     if(res){
       console.log("details edited successfully")
     }
   })
  }

  editForm(){
    this.clicked = false
   this.maindata.popupopen = !this.maindata.popupopen
  }

  closepopup(){
    this.dialogRef.close();
  }
}
