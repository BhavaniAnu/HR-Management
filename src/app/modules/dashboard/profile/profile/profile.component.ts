import { Component, OnInit } from '@angular/core';
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
  languages:string = ''
  hobbies:string = ''
  achievements:string =''

  constructor(private authSer:AuthServService, private empSer:EmployeeService) { 
   this.userData = JSON.parse(this.authSer.tokenData());
   this.empSer.getEmployeeById(this.userData.id).subscribe((res:any)=>{   
     this.User = Object.values(res.data);
     console.log(this.User);
   })
  }

  ngOnInit(): void {
    
  }

  save(){
    console.log(this.languages)
  }

}
