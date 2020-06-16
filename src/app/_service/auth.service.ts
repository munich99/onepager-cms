import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http'; 

interface myData {
  success: boolean,
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private http:HttpClient ) { }

getUserDetails(username, password) {
  // post these details to API server return user info if correct
  return this.http.post<myData>('/login/auth.php', {
    username,
    password
  })
}

}
