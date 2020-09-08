import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import {Router4Service} from '../../router4.service';
import {CounterInfo} from '../../../shared/counter.model';

@Component({
  selector: 'app-count-logs',
  templateUrl: './count-logs.component.html',
  styleUrls: ['./count-logs.component.css']
})
export class CountLogsComponent implements OnInit {
  counterInfo: Array<CounterInfo>
  subscription: Subscription;

  constructor(private counterService: Router4Service) { }

  ngOnInit(): void {
    this.subscription = this.counterService.getCountInfo().subscribe(value => {this.counterInfo = value.counterInfo; });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
