import { Component, OnInit, Input } from '@angular/core';
import {CounterInfo} from '../../../shared/counter.model';

@Component({
  selector: 'app-count-logs',
  templateUrl: './count-logs.component.html',
  styleUrls: ['./count-logs.component.css']
})
export class CountLogsComponent implements OnInit {
  @Input() counterInfo: Array<CounterInfo>
  constructor() { }

  ngOnInit(): void {
  }

}
