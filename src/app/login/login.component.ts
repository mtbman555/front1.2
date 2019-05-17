import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service"
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

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
    private userService: UserService,
    private router: Router
  ) { }

  async ngOnInit() {

  }

  async submitlogin() {
    let data = await this.userService.login(this.modallogin).toPromise()
    data ? localStorage.setItem('user', JSON.stringify(data)) : 
    data ? this.router.navigate(['/bg']) : Swal.fire('Username หรือ password ไม่ถูกต้อง', 'กรุณาลองใหม่อีกครั้ง', 'error')
  }

}

