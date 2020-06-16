import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private http:HttpClient ) { }

getUserDetails(username, password){
  // post this datails to API - return usernfo ist corect
  return this.http.post('/login/auth.php', {
    username,
    password
  }).subscribe(data => {
    console.log(data, "from server")

  })
}

}
