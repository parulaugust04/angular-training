import { Component, OnInit, Output , EventEmitter,ViewChild, Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import {CounterInfo} from '../../../shared/counter.model';

@Component({
  selector: 'app-count-control',
  templateUrl: './count-control.component.html',
  styleUrls: ['./count-control.component.css']
})
export class CountControlComponent implements OnInit {
  started = false;
  currentTime = 0;
  @ViewChild('f', { static: false }) counterForm: NgForm;
  @Input() counterDetail: Array<CounterInfo>
  @Output() timer = new EventEmitter<{timer: number, started: boolean, reset: boolean, inputChanged: boolean}>();

  constructor() { }

  ngOnInit(): void {
  }

  startTimer() {
    if(this.currentTime && this.currentTime !==  this.counterForm.value.timer){
      this.started = true;
      this.timer.emit({ timer: this.counterForm.value.timer, started: true , reset: false, inputChanged: true});
    } else {
      this.started = !this.started
      this.timer.emit({ timer: this.counterForm.value.timer, started: this.started , reset: false, inputChanged: false});
    }
    this.currentTime = this.counterForm.value.timer;
  }

  reset(){
    this.counterForm.reset();
    this.timer.emit({ timer: 0, started: this.started , reset: true, inputChanged: false});
  }

}
