import { Component, OnInit } from '@angular/core';
import { Route2Service } from './route2.service';

@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.css']
})
export class Route2Component implements OnInit {
  products = [];
  isFetching = false;
  error = null;
  listView= true;

  constructor(private Route2Service: Route2Service) { }

  ngOnInit(): void {
    this.isFetching = true;
    this.Route2Service.getData().subscribe(
      res => {
        this.isFetching = false;
        this.products = res
      },
      error => {
        this.error = error;
      });
  }
  sort(event: any) {
    switch (event.target.value) {
      case "low":
        {
          this.products = this.products.sort((low, high) => low.price - high.price);
          break;
        }

      case "high":
        {
          this.products = this.products.sort((low, high) => high.price - low.price);
          break;
        }

      case "name":
        {
          this.products = this.products.sort(function (low, high) {
            if (low.name < high.name) {
              return -1;
            }
            else if (low.name > high.name) {
              return 1;
            }
            else {
              return 0;
            }
          })
          break;
        }

      default: {
        this.products = this.products.sort((low, high) => low.price - high.price);
        break;
      }

    }
  }

  onChangeView(view:string){
    if(view === "list"){
    this.listView = true;
    }
    else{
      this.listView = false;
    }
  }

}
