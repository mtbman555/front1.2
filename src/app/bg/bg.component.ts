import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bg',
  templateUrl: './bg.component.html',
  styleUrls: ['./bg.component.css']
})
export class BgComponent implements OnInit {
  cost: number
  list: any = [];
  list2: any = [];
  menu: any = [];
  product: any = [];
  modal1: any = {
    name: "", table: "", count: 0,
  }
  modalmenu: any = {
    menuname: "", menucost: 0,
  }
  constructor() { }

  ngOnInit() {
    this.cost = 100.00
    this.menu = [
      {
        name: "เฟรนช์ฟราย", cost: 40
      }
    ]
    this.product =[
      {
        name: "PW deck WAR", cost: 450
      }
    ]
    this.list = [
      {
        name: "Mark", no: 8, table: 1
      },
      {
        name: "Mark", no: 8, table: 1
      },
      {
        name: "Mark", no: 8, table: 1
      },
    ]
    this.list2 = [
      {
        name: "สลีฟใส", amount: 1, cost: 20
      },
      {
        name: "RNA Booster", amount: 2, cost: 240
      },
      {
        name: "กล่อง Deck Master", amount: 1, cost: 70
      },
    ]
  }
  deletecus(data){
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

  deletemenu(data){
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
  confirmpay(){
    Swal.fire({
      title: 'Are you sure?',
      text: "คุณยืนยันใช่ไหมที่จะชำระเงิน",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: 'ยกเลิก',
      confirmButtonText: 'ยืนยัน'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'ชำระเงินแล้ว',
          'เสร็จสมบูรณ์',
          'success'
        )
      }
    })
  }
  submit() {
    console.log(this.modal1)
  }
  submitmenu() {
    console.log(this.modalmenu)
  }
}
