import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-my-edit',
  templateUrl: './my-edit.component.html',
  styleUrls: ['./my-edit.component.css']
})
export class MyEditComponent implements OnInit {
  @Input('text') username: string;

  

  constructor(private httpService: HttpClient) { }

  ngOnInit() {
    console.log(this.username, "username");
    
  }

  newText(newtext){    

    let data ={
      "firstName": "aaa",
      "lastName": "tztz",
      "email": "aa",
      "mobile": "aaa"
  }

    this.httpService.post('./assets/process.php', data)
      .subscribe(
        (res:Response) => {
          console.log(res.json());
        },
        err => {
          console.log("Error occured");
        }
      );
  }



}
