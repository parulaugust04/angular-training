import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { Route6RoutingModule } from './route6-routing.module';
import { Route6Component } from './route6.component';


@NgModule({
  declarations: [Route6Component],
  imports: [
    CommonModule,
    Route6RoutingModule,
    InfiniteScrollModule,
  ]
})
export class Route6Module { }
