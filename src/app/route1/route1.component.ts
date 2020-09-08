import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route1',
  templateUrl: './route1.component.html',
  styleUrls: ['./route1.component.css']
})
export class Route1Component implements OnInit {
  containerDivs: number = 8;
  constructor() { }
  ngOnInit(): void {
  }

  getHeight(i: number){
    return `${10 + (i + 1) * 30}px`;
  }

  getWidth(i: number){
    return `${200 + (i + 1) * 30}px`;
  }

}
