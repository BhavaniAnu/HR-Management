import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { AuthServService } from 'src/app/services/auth-serv.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userData: any;
  User: any;

  profileForm: FormGroup;
  constructor(private authSer: AuthServService, private empSer: EmployeeService, private builder: FormBuilder,) {

    this.userData = JSON.parse(this.authSer.tokenData());
    this.empSer.userid.next(this.userData.id);
    this.empSer.getEmployeeById(this.userData.id).subscribe((res: any) => {
      this.User = Object.values(res.data);
    })
   
      this.profileForm = builder.group({
        phoneNumber: '',
        faceBook: '',
        languages: '',
        achievements: '',
        email: '',
        hobbies:'',
  
      })
  }

  ngOnInit(): void {

  }

   profileSubmit(value: any) {
     this.profileForm.value["empId"] = this.userData.id;
    this.empSer.updateEmployee(value).subscribe((res:any)=>{
      if(res){
        console.log("details edited successfully")
      }
    })
   }

}
