import { Injectable } from '@angular/core';
import { Passenger } from '../models/passenger.interface';

@Injectable()
export class PassengerDashboardService {

  constructor() { }

  getPassengers(): Passenger[] {

    return [{
      id: 1,
      fullname: 'Stephen',
      checkedIn: true,
      checkInDate: 1510742000000,
      children: [{ name: 'Ted', age: 3 }],
      nationality: null
    }, {
      id: 2,
      fullname: 'Rose',
      checkedIn: false,
      children: null,
      nationality: 'france.svg'
    }, {
      id: 3,
      fullname: 'James',
      checkedIn: true,
      checkInDate: 1510742000000,
      children: [{ name: 'Chloe', age: 7 }, { name: 'Emma', age: 5 }],
      nationality: 'united-states-of-america.svg'
    }, {
      id: 4,
      fullname: 'Louise',
      checkedIn: true,
      checkInDate: 1510742000000,
      children: null,
      nationality: null
    }, {
      id: 5,
      fullname: 'Tina',
      checkedIn: false,
      children: null,
      nationality: 'united-kingdom.svg'
    }
    ];
    
  }

}
