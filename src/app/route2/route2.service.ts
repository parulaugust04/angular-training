import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable()
export class Route2Service {
    private url: string = 'assets/apiData/productsData.json';
    constructor(private http: Http) {}
    getData() {
        return this.http.get(this.url).pipe(map((response:Response) => response.json()),
        catchError(errorRes => {
          return throwError('Something bad happened; please try again later.');
        }));
    }
}