import { Component, OnInit, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-info',
  templateUrl: './passenger-info.component.html',
  styleUrls: ['./passenger-info.component.css']
})
export class PassengerInfoComponent implements OnInit {

  
  defaultFlag: string = 'european-union.svg';

  @Input()
  passenger: Passenger;

  constructor() { }

  ngOnInit() {
  }

}
