import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { ProductService } from "../services/product.service"

@Component({
  selector: 'app-sm',
  templateUrl: './sm.component.html',
  styleUrls: ['./sm.component.css']
})
export class SmComponent implements OnInit {
  list: any = [];
  list2: any = [];
  addpro: any = {
    name: " ",cost: 0,price: 0,amount: 0
  }
  addstock: any = {
    addstockname: " "
  }
  modal2: any = {
    search2: " "
  }
  constructor(
    private productService: ProductService
  ) { }

  async ngOnInit() {
    this.list2 = await this.productService.getAllProduct().toPromise()
    console.log(this.list2)
    this.list = [
      {
        name: "บอร์ดเกม"
      },
      {
        name: "การ์ด Magic"
      },
      {
        name: "การ์ด Pokemon"
      },
    ]
    
    
  }

  deletestock(data) {
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
  deletepro(data) {
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
  async submitaddpro(){
    console.log(this.addpro)
    await this.productService.insertProduct(this.addpro)
    this.list2 = await this.productService.getAllProduct().toPromise()
  }
  submitaddstock(){
    console.log(this.addstock)
  }
  submitsearch2(){
    console.log(this.modal2)
  }
}