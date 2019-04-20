import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sp',
  templateUrl: './sp.component.html',
  styleUrls: ['./sp.component.css']
})
export class SpComponent implements OnInit {
  mem: any = [];
  modal1:any = {
    search: ""
  }
  modalmem:any = {
    ID: "", name:"", sname:"", nname:"", mail:""
  }
  modalpoint:any = {
    ID: "", add: 0, sub: 0
  }
  constructor() { }

  ngOnInit() {
    this.mem = [
      {
        id: "DD0001",name: "ปลาหยุด", lname: "จานโอชา", nname: "ตู้", mail: "prayuthza007@gmail.com", point: "888"
      },
      {
        id: "DD0001",name: "ปลาหยุด", lname: "จานโอชา", nname: "ตู้", mail: "prayuthza007@gmail.com", point: "888"
      },
    ]
  }
  deletemem(data){
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
  submitsearch(){
    console.log(this.modal1)
  }
  submitmem(){
    console.log(this.modalmem)
  }
  submitpoint(){
    console.log(this.modalpoint)
  }
}
