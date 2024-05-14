import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { ICar } from '../interfaces/app.car';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarServiceService {
  baseUrl = 'https://car-api2.p.rapidapi.com';
  apiKey = '884209f72dmsh16727f6f59d3669p128a7fjsn8f51a7acd24b';

  constructor(private http: HttpClient) {}

  getCarMakes() {
    const headers = {
      'x-rapidapi-key': this.apiKey,
      'x-rapidapi-host': 'car-api2.p.rapidapi.com',
    };

    return this.http.get(`${this.baseUrl}/api/makes`, { headers });
  }

getCarModels(make: string): Observable<any> {
  const headers = {
    'x-rapidapi-key': this.apiKey,
    'x-rapidapi-host': 'car-api2.p.rapidapi.com',
  };
  const params = new HttpParams().set('make', make);

  return this.http.get(`${this.baseUrl}/api/models`, { headers, params });
}
  getCarData():Observable<any>{

    const headers = {
      'x-rapidapi-key': this.apiKey,
      'x-rapidapi-host': 'car-api2.p.rapidapi.com',
    };

    console.log("express url:" + this.baseUrl + "/api/makes", {headers})
    return this.http.get<ICar>(this.baseUrl + "/api/makes", {headers})
    .pipe(
      tap(data => console.log('car data/error' + JSON.stringify(data))
    ),
    catchError(this.handleError)
    );
  }
  private handleError (err:HttpErrorResponse) {
    console.log('CarApiService: ' + err.message);
    return err.message;
  }
}