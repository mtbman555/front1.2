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
  currentPath = ''
  title = 'Pro';
  constructor(
    private router: Router
  ){
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd ) {
        this.currentPath = event.url
      }
    });
  }
  
  ngOnChangaes() {

  }
  
}
