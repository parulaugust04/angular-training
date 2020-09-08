import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpModule} from '@angular/http';

import { Route5RoutingModule } from './route5-routing.module';
import { Route5Component } from './route5.component';
import {Route5Service} from './route5.service';
import { KeysPipe } from './keys.pipe';


@NgModule({
  declarations: [Route5Component, KeysPipe],
  imports: [
    CommonModule,
    Route5RoutingModule,
    HttpModule
  ], 
  providers: [Route5Service],
})
export class Route5Module { }
