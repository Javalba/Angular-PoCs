import { Component, OnInit } from '@angular/core';
// Import the User model
import { User } from '../../models/User'; 

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
 
  //Gender list for the select control element
  private genderList: string[];
  
  //Property for the user
  private user:User;
 
  ngOnInit() {
 
    this.genderList =  ['Male', 'Female', 'Others'];
   
    
}