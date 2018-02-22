import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'child-form',
  templateUrl: './child-form.component.html',
  styleUrls: ['./child-form.component.css']
})
export class ChildFormComponent implements OnInit {

  users;
  constructor(public controlContainer: ControlContainer, private userService: UserService,) { }

  ngOnInit() {
    this.userService.getUsers().
      subscribe(users => {this.users = users[0]; console.log(this.users[0]);
      });
  }

}
