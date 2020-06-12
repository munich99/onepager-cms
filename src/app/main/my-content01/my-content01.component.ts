import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-my-content01',
  templateUrl: './my-content01.component.html',
  styleUrls: ['./my-content01.component.css']
})
export class MyContent01Component implements OnInit {




  title = 'JSON to Table Example';

  constructor(private httpService: HttpClient) { }

  arrBirds: string [];
  arrBirdsText: string;
  logIn:boolean=true;

  ngOnInit() {
    
    
    this.httpService.get('./assets/birds.json').subscribe(
      data => {
        this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.
        console.log(this.arrBirds, "ttttt");
        this.arrBirdsText = this.arrBirds[0]["Scientific Name"];

        //  console.log(this.arrBirds[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

  

}
