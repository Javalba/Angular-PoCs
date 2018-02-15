import { Passenger } from './../../models/passenger.interface';
import { Component, OnInit } from '@angular/core';
import { PassengerDashboardService } from '../../services/passenger-dashboard.service';

@Component({
  selector: 'passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.css']
})
export class PassengerDashboardComponent implements OnInit {

  defaultFlag: string = 'european-union.svg';
  passengers: Passenger[];
  display: boolean;
  selectedPassenger: Passenger;

  constructor(private passengerService: PassengerDashboardService){}

  ngOnInit() {
    this.passengerService.getPassengers().subscribe(
      (data: Passenger[]) => this.passengers = data);
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

  handleSelect(passenger: Passenger){
    this.selectedPassenger = passenger;
  }
}
