import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'passenger-actions',
  templateUrl: './passenger-actions.component.html',
  styleUrls: ['./passenger-actions.component.css']
})
export class PassengerActionsComponent implements OnInit {
  display: boolean;

  @Output()
  filter: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  filterPassengers(value: any) {
    this.display = value;
    console.log(value);

    this.filter.emit(this.display);
  }

  ngOnInit() {
  }

}
