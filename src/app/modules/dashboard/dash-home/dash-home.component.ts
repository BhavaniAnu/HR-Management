import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-home',
  templateUrl: './dash-home.component.html',
  styleUrls: ['./dash-home.component.scss']
})
export class DashHomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onclick(){
    this.router.navigate(['employees/details'])
  }

}
