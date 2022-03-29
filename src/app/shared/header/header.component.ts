import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Constant } from 'src/app/constants/authconstant';
import { AuthServService } from 'src/app/services/auth-serv.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  mymodel:any
  constructor(private http:HttpClient, private authser: AuthServService, private router: Router) { }

  ngOnInit(): void {
  }
  logout(){
     this.authser.logout('logout');
  }
  valuechange(event:string) {
    this.authser.searchTerm.next(event);
  }

}
