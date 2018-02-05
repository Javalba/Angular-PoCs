import { Passenger } from './../../models/passenger.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'passenger-count',
  templateUrl: './passenger-count.component.html',
  styleUrls: ['./passenger-count.component.css']
})
export class PassengerCountComponent implements OnInit {

  name: string = '';

  @Input() items: Passenger[];
  constructor() { }

  ngOnInit() {
  }

  checkedInCount(): number {
    if (!this.items) return; //check if items exists
    return this.items.filter( (passenger: Passenger) => { return passenger.checkedIn } ).length;
  }


  /*   handleChange(value: string) {
      this.name = value;
    } */

}
