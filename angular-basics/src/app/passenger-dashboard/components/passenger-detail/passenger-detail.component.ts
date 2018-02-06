import { Passenger } from './../../models/passenger.interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.css']
})
export class PassengerDetailComponent implements OnInit {

  defaultFlag: string = 'european-union.svg';
  editing: boolean = false;

  @Input()
  display: boolean;

  @Input()
  detail: Passenger; // receive one passenger from array

  @Output()
  remove: EventEmitter<Passenger> = new EventEmitter();

  @Output()
  edit: EventEmitter<Passenger> = new EventEmitter();

  onNameChange(value: string) {
    this.detail.fullname = value;
  }

  toggleEdit(){
    if(this.editing) this.edit.emit(this.detail); // send detail to parent component

    this.editing = !this.editing;
  }

  onRemove() {
    this.remove.emit(this.detail); // send detail to parent component
  }

  onCheckIn() {
    this.detail.checkedIn=true;
    this.detail.checkInDate = Date.now();
    this.edit.emit(this.detail);
  }


  constructor() { }

  ngOnInit() {}

}
