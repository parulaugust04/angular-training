import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-count-timer',
  templateUrl: './count-timer.component.html',
  styleUrls: ['./count-timer.component.css']
})
export class CountTimerComponent implements OnInit {
  @Input() timeUpdate: number;

  constructor() { }

  ngOnInit(): void {
   
  }


}
