import { Component, OnInit } from '@angular/core';


import { UserService } from "../services/user.service"
import { from } from 'rxjs';

@Component({
  
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  tmp: any 
  modallogin: any = {
    id: "", pw: ""
  }
  constructor(
    private userService: UserService
  ) { }

  async ngOnInit() {
    
  }

  async submitlogin() {
    let data = await this.userService.login(this.modallogin);
    console.log(data)
    
  }
  
}

