import { Component, OnInit } from '@angular/core';
import {CountInfo, CounterInfo} from '../shared/counter.model';

@Component({
  selector: 'app-route3',
  templateUrl: './route3.component.html',
  styleUrls: ['./route3.component.css']
})

export class Route3Component implements OnInit {
  timerValueRcv: number = 0;
  interval: any;
  counterInfo: Array<CounterInfo> = []
  countInfo: CountInfo = {playCount: 0, pauseCount: 0};

  constructor() { }

  ngOnInit(): void {
  }

  startTimervalue(obj) {
    
    if(obj.started && !obj.reset){
      if(obj.inputChanged) {
        this.timerValueRcv = obj.timer;
        clearInterval(this.interval);
      }
      this.countInfo.playCount++;
      this.interval = setInterval(() => {
        if(this.timerValueRcv > 0) {
          this.timerValueRcv--;
          if(!this.timerValueRcv){
            clearInterval(this.interval);
          }
        } else {
          this.timerValueRcv = obj.timer;
        }
      },1000)
      this.counterInfo.push({updatedAt: new Date(), time : this.timerValueRcv, start: true});
    } else {
      clearInterval(this.interval);
      if(obj.reset){
        this.timerValueRcv = 0;
        this.countInfo.playCount = 0;
        this.countInfo.pauseCount = 0;
        this.counterInfo = [];
      } else {
        this.countInfo.pauseCount++;
        this.counterInfo.push({updatedAt: new Date(), time : this.timerValueRcv, start: false});
      }
   }  
  }
}
