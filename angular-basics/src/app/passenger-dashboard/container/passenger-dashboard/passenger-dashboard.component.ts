import { Passenger } from './../../models/passenger.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.css']
})
export class PassengerDashboardComponent implements OnInit {

  defaultFlag: string = 'european-union.svg';
  passengers: Passenger[];
  display: boolean;

  ngOnInit() {

    this.passengers = [{
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
    ]
  }

/**
 * Inmutable objects
 *  In this case we’ll use Object.assign to create a new object and assign it to the value passenger,
 *  that will be included into the final array that will return.
 */
  handleEdit(event) {
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if (passenger.id === event.id) {
        passenger = Object.assign({}, passenger, event);
      }
      return passenger;
    });
  console.log(this.passengers);
  }

  handleRemove(event) {
    this.passengers = this.passengers.filter((passenger: Passenger) => {
      return passenger.id !== event.id;
    });
  }

  handleFilter(display: boolean){
    this.display = display;
  }

}
