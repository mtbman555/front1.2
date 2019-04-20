import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pp',
  templateUrl: './pp.component.html',
  styleUrls: ['./pp.component.css']
})
export class PpComponent implements OnInit {
  list: any = [];
  constructor() { }

  ngOnInit() {
    this.list = [
      {
        date: "15", name: "บอร์ดเกม 5 คน", time: "14.05", cost: 450
      },
      {
        date: "15", name: "Sleev DS Black", time: "", cost: 350
      },
      {
        date: "15", name: "Sleev DS Black", time: "", cost: 350
      },
    ]
  }
  deletelist(data){
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
