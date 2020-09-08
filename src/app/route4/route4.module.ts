import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route4RoutingModule } from './route4-routing.module';
import { Route4Component } from './route4.component';
import { CountTimerComponent } from './counter/count-timer/count-timer.component';
import { CountControlComponent } from './counter/count-control/count-control.component';
import { CountLogsComponent } from './counter/count-logs/count-logs.component';
import { CountStatusComponent } from './counter/count-status/count-status.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [Route4Component, CountControlComponent, CountTimerComponent, CountLogsComponent ,CountStatusComponent],
  imports: [
    CommonModule,
    Route4RoutingModule, 
    FormsModule
  ]
})
export class Route4Module { }
