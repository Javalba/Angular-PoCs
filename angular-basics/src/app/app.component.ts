import { Component } from '@angular/core';

interface Child {
  name: string,
  age: number
}

//declare interface
interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean,
  checkInDate?: number, // if exist
  children: Child[] | null,
  nationality: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name: string = '';
  display: boolean;
  defaultFlag: string='european-union.svg';

  passengers: Passenger[] = [{
      id: 1,
      fullname: 'Stephen',
      checkedIn: true,
      checkInDate: 1510742000000,
      children: [{name: 'Ted', age: 3}],
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
      children: [{name: 'Chloe', age: 7},{name: 'Emma', age: 5}],
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

  filterPassengers(value:any){
    this.display=value;
  }


  handleChange(value: string){
    this.name=value;
  }
}
