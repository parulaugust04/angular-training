import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { Route3RoutingModule } from './route3-routing.module';
import { Route3Component } from './route3.component';
import { CountTimerComponent } from './counter/count-timer/count-timer.component';
import { CountControlComponent } from './counter/count-control/count-control.component';
import { CountLogsComponent } from './counter/count-logs/count-logs.component';
import { CountStatusComponent } from './counter/count-status/count-status.component';


@NgModule({
  declarations: [Route3Component, CountTimerComponent, CountControlComponent, CountLogsComponent, CountStatusComponent],
  imports: [
    CommonModule,
    Route3RoutingModule,
    FormsModule
  ]
})
export class Route3Module { }
