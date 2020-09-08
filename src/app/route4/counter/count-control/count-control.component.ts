import { Component, OnInit, Output , EventEmitter,ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router4Service} from '../../router4.service';
import {CounterInfo, CountInfo} from '../../../shared/counter.model';

@Component({
  selector: 'app-count-control',
  templateUrl: './count-control.component.html',
  styleUrls: ['./count-control.component.css']
})
export class CountControlComponent implements OnInit {
  started = false;
  timer = 0
  timerValueRcv: number ;
  interval: any;
  counterInfo: Array<CounterInfo> = []
  countInfo: CountInfo = {playCount: 0, pauseCount: 0};
  @ViewChild('f', { static: false }) counterForm: NgForm;

  constructor(private counterService : Router4Service) { }

  ngOnInit(): void {
  }

  startTimer() {
    if(this.timer && this.timer !==  this.counterForm.value.timer){
      clearInterval(this.interval);
      this.timerValueRcv = 0;
      this.started = true;
    } else {
      this.started = !this.started;
    }

    this.timer =  this.counterForm.value.timer;
    
    if(this.started){
      this.countInfo.playCount++;

      this.interval = setInterval(() => {
        if(this.timerValueRcv > 0) {
          this.timerValueRcv--;
          if(!this.timerValueRcv){
            clearInterval(this.interval);
            this.started=false;
          }
        } else {
          this.timerValueRcv = this.timer; 
        }
        this.counterService.setTime(this.timerValueRcv);
      },1000)

      this.counterInfo.push({updatedAt: new Date(), time : this.timerValueRcv, start: true});
    } else {
      clearInterval(this.interval);
      this.countInfo.pauseCount++;
      this.counterInfo.push({updatedAt: new Date(), time : this.timerValueRcv, start: false});
   } 
   this.counterService.setCountInfo(this.countInfo, this.counterInfo);
  }

  reset(){
    clearInterval(this.interval);
    
    this.timerValueRcv = 0;
    this.countInfo.playCount = 0;
    this.countInfo.pauseCount = 0;
    this.counterInfo = [];

    this.counterForm.reset();

    this.counterService.setTime(0);
    this.counterService.setCountInfo(this.countInfo, this.counterInfo);
  }

}
