import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginUser(event){
    event.preventDefault()
    const target = event.target
    const password = target.querySelector('#password').value
    const username = target.querySelector('#username').value
    this.Auth.getUserDetails(username, password).subscribe( data => {
      if(data.success){
        this.router.navigate(['admin'])
       // this.Auth.setLoggedIn(true)
      }else{
        alert(data.message)
      }
    })
    console.log(username,password)
  }

}
