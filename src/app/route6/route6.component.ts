import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route6',
  templateUrl: './route6.component.html',
  styleUrls: ['./route6.component.css']
})
export class Route6Component implements OnInit {
  dataSource: number = 10;
  loading: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  onClick(index: number){
    alert(`Button ${index+1 } is clicked.`);
  }
  onScroll(){
    this.loading = true;
    setTimeout(() => {
      this.dataSource += 10;
      this.loading = false;
    }, 2000);
  }

}
