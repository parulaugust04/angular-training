import { Component, OnInit, Input } from '@angular/core';
import {CountInfo} from '../../../shared/counter.model';


@Component({
  selector: 'app-count-status',
  templateUrl: './count-status.component.html',
  styleUrls: ['./count-status.component.css']
})
export class CountStatusComponent implements OnInit {

  @Input() countInfo: CountInfo;
  constructor() { }

  ngOnInit(): void {
  }

}
