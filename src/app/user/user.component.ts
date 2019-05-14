import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { UserService } from "../services/user.service"
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: any = [];
  modal1: any = {
    search: ""
  }
  modaluser: any = {
    id: "", pw: "", pw2: "", name: "", status: ""
  }
  constructor(
    private userService: UserService,
    private router: Router) { }

  async ngOnInit() {
    this.user = await this.userService.getAllUser().toPromise()
  }

  submitsearch() {
    console.log(this.modal1)
    this.router.navigate(['/bg'])
  }


  async submituser() {
    
    let body = this.modaluser
      if (body.pw == body.pw2) {
        if (body.pw.length >= 6) {
            await this.userService.insertUser(this.modaluser)
            this.user = await this.userService.getAllUser().toPromise()
        }
      }else{
        location.reload()
      }
  }
  deleteuser(data) {
    Swal.fire({
      title: 'Are you sure?',
      text: "คุณยืนยันใช่ไหมที่จะลบ",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: 'ยกเลิก',
      confirmButtonText: 'ยืนยัน'
    }).then(async (result) => {
      if (result.value) {
        let deleteUser = await this.userService.deleteUser(data._id)
        this.user = await this.userService.getAllUser().toPromise()
        Swal.fire(
          'ลบแล้ว',
          'การลบเสร็จสมบูรณ์',
          'success'
        )
        location.reload()
      }
    })
  }
}
