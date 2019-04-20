import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: any = [];
  modal1:any = {
    search: ""
  }
  modaluser:any = {
    ID: "", PW: "",PW2: "", NAME: "", STATUS: ""
  }
  constructor() { }

  ngOnInit() {
    this.user = [
      {
        id: "DD0001",pw: "123456", name: "จานโอชา", status: "GM"
      },
    ]
  }
  submitsearch(){
    console.log(this.modal1)
  }
  submituser(){
    console.log(this.modaluser)
  }
  deleteuser(data){
    Swal.fire({
      title: 'Are you sure?',
      text: "คุณยืนยันใช่ไหมที่จะลบ",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: 'ยกเลิก',
      confirmButtonText: 'ยืนยัน'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'ลบแล้ว',
          'การลบเสร็จสมบูรณ์',
          'success'
        )
      }
    })
  }
}
