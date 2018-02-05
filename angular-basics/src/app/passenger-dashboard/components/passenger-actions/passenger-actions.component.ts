import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'passenger-actions',
  templateUrl: './passenger-actions.component.html',
  styleUrls: ['./passenger-actions.component.css']
})
export class PassengerActionsComponent implements OnInit {
  display: boolean;

  constructor() { }

  filterPassengers(value: any) {
    this.display = value;
  }

  ngOnInit() {
  }

}
