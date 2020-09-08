import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpModule} from '@angular/http';


import { Route2RoutingModule } from './route2-routing.module';
import { Route2Component } from './route2.component';
import {Route2Service} from './route2.service';


@NgModule({
  declarations: [Route2Component],
  imports: [
    CommonModule,
    Route2RoutingModule,
    HttpModule,
  ],
  providers: [Route2Service]
})
export class Route2Module { }
