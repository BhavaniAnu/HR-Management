import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent implements OnInit {



  rows: any
  value: any;
  myModel: any;
  tue: string = ''
  tar: any;
  constructor() { }

  ngOnInit(): void {

    this.rows = ['task1', 'task2', 'task3', 'task4', 'task5', 'task6', 'task7']
  }

  

  onKey(event:any) {const inputValue = event.target.value;
  console.log(inputValue)
  }

  edit(){
    this.event1();
  }
  event1() {
    // let input = document.querySelector('tbody');
    let inputs = document.querySelectorAll('input');
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener('change', (e) => {
        this.tar = e;
        const { target } = e;

           console.log(target);
         
        });
      }
      // this.joint()
    }

    // joint(){
    //   console.log();
    // }
       

}
