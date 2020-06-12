import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-edit',
  templateUrl: './my-edit.component.html',
  styleUrls: ['./my-edit.component.css']
})
export class MyEditComponent implements OnInit {
  @Input('text') username: string;

  

  constructor() { }

  ngOnInit() {
    console.log(this.username, "username");
    
  }

  newText(uebergabe:any){
    console.log(uebergabe)

  }

}
