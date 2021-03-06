import { Passenger } from './../models/passenger.interface';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


const PASSENGER_API: string = `${environment.backend}/passengers`;

@Injectable()
export class PassengerDashboardService {

  constructor(private http: Http) { }

  getPassengers(): Observable<Passenger[]>{
    return this.http
    .get(PASSENGER_API)
    .map((response: Response) => response.json());
  }

  updatePassenger(passenger: Passenger): Observable<Passenger[]>{
    return this.http
    .put(`${PASSENGER_API}/${passenger.id}`, passenger)
    .map((response: Response) => response.json());
  }

  removePassenger(passenger: Passenger): Observable<Passenger[]>{
    return this.http
    .delete(`${PASSENGER_API}/${passenger.id}`)
    .map((response: Response) => response.json());
  }


}
