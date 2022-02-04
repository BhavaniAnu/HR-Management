import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServService } from 'src/app/services/auth-serv.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authser: AuthServService, private router: Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.authser.logout();
  }

}
