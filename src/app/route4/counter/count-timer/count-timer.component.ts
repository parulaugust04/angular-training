import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import {Router4Service} from '../../router4.service';

@Component({
  selector: 'app-count-timer',
  templateUrl: './count-timer.component.html',
  styleUrls: ['./count-timer.component.css']
})
export class CountTimerComponent implements OnInit {
  timeUpdate: number = 0;
  subscription: Subscription;

  constructor(private counterService: Router4Service) { }

  ngOnInit(): void {
    this.subscription = this.counterService.getTime().subscribe(time => {this.timeUpdate = time});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
