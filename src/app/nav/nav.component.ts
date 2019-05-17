import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  con: any = "disabled"

  user: any = [];

  constructor(  ) { }

  async ngOnInit() {
    let user = JSON.parse(localStorage.getItem('user'))
    console.log(user.status)
  }


}
