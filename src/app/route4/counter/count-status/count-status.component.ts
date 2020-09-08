import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import {Router4Service} from '../../router4.service';
import {CountInfo} from '../../../shared/counter.model';

@Component({
  selector: 'app-count-status',
  templateUrl: './count-status.component.html',
  styleUrls: ['./count-status.component.css']
})
export class CountStatusComponent implements OnInit {

  countInfo:CountInfo = {playCount: 0, pauseCount: 0};
  subscription: Subscription;
  
  constructor(private counterService: Router4Service) { }

  ngOnInit(): void {
    this.subscription = this.counterService.getCountInfo().subscribe(value => {this.countInfo = value.countInfo; });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
