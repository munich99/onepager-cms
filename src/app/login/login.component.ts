import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth:AuthService ) { }

  ngOnInit() {
  }

  loginUser(event){
    const target= event.target;
    const username= target.querySelector('#username').value;
    const password= target.querySelector('#password').value;
    this.Auth.getUserDetails(username, password)
    //event.prevendDefault()
    console.log(username, password);
    
  }

}
