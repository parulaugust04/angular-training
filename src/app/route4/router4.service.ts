import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Router4Service {
  private timerUpdate = new Subject<number>();
  private counterInfo = new Subject<any>();

  setCountInfo(countInfo: any, counterInfo: any){
    this.counterInfo.next({ countInfo: countInfo, counterInfo: counterInfo });
  }

  getCountInfo(): Observable<any>{
    return this.counterInfo.asObservable();
  }

  setTime(time: number) {
    this.timerUpdate.next(time);
  }

  getTime(): Observable<any> {
    return this.timerUpdate.asObservable();
  }
}
