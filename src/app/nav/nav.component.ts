import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  con: any = "disabled"
  constructor() { }

  ngOnInit() {
    
  }
  turnon(){
    this.con =" "
  }
  turnoff(){
    this.con ="disabled"
  }
}
