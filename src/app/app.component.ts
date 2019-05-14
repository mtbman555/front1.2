import { Component, OnInit } from '@angular/core';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { Router } from '@angular/router';
import { Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router'
// import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  con: any = true
  title = 'Pro';
  constructor(
    private router: Router
  ){
    router.events.subscribe((event: Event) => {
      // console.log(event);
      if (event instanceof NavigationEnd ) {
        console.log(event.url);
        if (event.url == "/login") {
          return this.con = false
        }
      }
    });
  }
  
  
}
