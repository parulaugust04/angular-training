import { Component, OnInit } from '@angular/core';
import { Route5Service } from './route5.service';

@Component({
  selector: 'app-route5',
  templateUrl: './route5.component.html',
  styleUrls: ['./route5.component.css']
})
export class Route5Component implements OnInit {
  data =  [];
  originalData = [];
  isFetching = false;
  error = null;
  sortOrder = '';
  sortBy = ''

  constructor(private Route5Service: Route5Service) { }

  ngOnInit(): void {
    this.isFetching = true;
    this.Route5Service.getData().subscribe(
      res => {
        this.isFetching = false;
        this.data = res;
        this.originalData = [...res];
      },
      error => {
        this.error = error;
      });
  }

  sortTable(param) {
    if(this.sortBy !== param){
      this.sortBy = param;
      this.sortOrder = '';
    }
    if(this.sortOrder == '') {
      this.sortOrder = 'asc';
      this.data.sort((a, b) => {
       return a[param].localeCompare(b[param]);
      });
    } else if(this.sortOrder == 'asc'){
      this.sortOrder = 'dsc';
      this.data.sort((a, b) => {
        return b[param].localeCompare(a[param]);
      })
    } else if(this.sortOrder == 'dsc'){
      this.sortOrder = '';
      this.data = [...this.originalData]
    };
  }
}
