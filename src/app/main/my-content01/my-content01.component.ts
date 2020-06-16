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
  arrBirdsShow: string []=[];
  logIn:boolean=false;

  ngOnInit() {   
    this.httpService.get('./assets/data.json').subscribe(
      data => {
        this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.    
          
        let i =0;
        while(this.arrBirds.length > i) {
          if(this.arrBirds[i]["firstName"] == "aboutme"){
            this.arrBirdsShow.push(this.arrBirds[i])
            console.log("yes");
          }
          i++;
        }
        
        // this.arrBirdsText = this.arrBirds[0]["lastName"];
        
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );

    
  }

 
  

}
