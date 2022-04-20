import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent implements OnInit {



  rows: any
  value: any;
  dummy : string[] = [];
  map = new Map();
  taskday:any
  constructor() { }

  ngOnInit(): void {

    this.rows = ['task1', 'task2', 'task3', 'task4', 'task5', 'task6', 'task7']
  }

  

  onKey(event:any) {const inputValue = event.target.value;
  console.log(inputValue);
  this.value = inputValue
  }

  edit(){
    this.event1();
  }
  event1() {
    // let input = document.querySelector('tbody');
    let inputs = document.querySelectorAll('input');
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener('change', (e) => {
       this.taskday = (e.target as HTMLInputElement).name;
         this.joint(this.taskday)
        });
      }
    }



    joint(value:string){
      if(this.value){
        this.map.set(this.value, value)
        // this.dummy.push(value);
        // console.log(this.dummy);
        console.log(this.map)
      }
     
    }
       

}
