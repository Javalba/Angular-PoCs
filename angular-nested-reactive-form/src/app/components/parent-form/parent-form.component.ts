import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import {FormBuilder, ControlContainer} from '@angular/forms'

@Component({
  selector: 'app-parent-form',
  templateUrl: './parent-form.component.html',
  styleUrls: ['./parent-form.component.css']
})
export class ParentFormComponent implements OnInit {

  constructor(private userService: UserService, private fb: FormBuilder) { }

  users: User[];

  form = this.fb.group({
    nested: this.fb.group({
      id: '',
      name: '',
      surname: ''
    }),
    email: '',
    address: '',
  })



  ngOnInit() {
    this.userService.getUsers().subscribe(
      (data: User[]) =>{
        this.users = data;
        console.log(this.users[0].name);
      });


  }

}
