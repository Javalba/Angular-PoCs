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
      surname: '',
      address: ''
    }),
    email: '',
  })



  ngOnInit() {
    
    this.form.setValue({
      email: 'this.users[1].email',
      nested: {
        id: 'this.users[1].id',
        name:' this.users[1].name',
        surname: 'this.users[1].surname',
        address: 'ad',
      }});
//     this.userService.getUsers().subscribe(
//       (data: User[]) =>{
//         this.users = data;
//         console.log(this.users[0].name);
//         console.log("FORM:");
//         console.log(this.form);
// /*         this.form.controls.email.setValue(this.users[0].email); */
        
//         });
/*         this.form.find('username').updateValue(user.username);
        this.form.find('email').updateValue(user.email); */

        //this.form.controls.id.updateValueAndValidity(this.users[0].name);
        //this.form.setValue({id: this.users[0].id, name: this.users[0].name, surname: this.users[0].surname})
/*         this.form.get('name').setValue(this.users[0].name);
        this.form.controls({username: this.user.username, mail: this.user.mail}) */

      
  }

}
