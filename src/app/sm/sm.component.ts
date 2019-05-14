import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { ProductService } from "../services/product.service"
import { StockService } from "../services/stock.service"
import { async } from 'q';

@Component({
  selector: 'app-sm',
  templateUrl: './sm.component.html',
  styleUrls: ['./sm.component.css']
})
export class SmComponent implements OnInit {
  list: any = [];
  list2: any = [];
  addpro: any = {
    name: "", cost: null, price: null, amount: null, stock: null
  }
  addstock: any = {
    name: ""
  }
  modal2: any = {
    search2: " "
  }
  constructor(
    private productService: ProductService,
    private stockService: StockService
  ) { }

  async ngOnInit() {
    this.list2 = await this.productService.getAllProduct().toPromise()
    //console.log(this.list2)
    this.list = await this.stockService.getAllStock().toPromise()


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
    }).then(async(result) => {
      if (result.value) {
        let deleteStock = await this.stockService.deleteStock(data._id)
        let deleteAllProduct = await this.productService.deleteAllProduct(data._id)
        Swal.fire(
          'ลบแล้ว',
          'การลบเสร็จสมบูรณ์',
          'success'
        )
        // location.reload()
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
    }).then(async (result) => {
      if (result.value) {
        let deleteProduct = await this.productService.deleteProduct(data._id)
        Swal.fire(
          'ลบแล้ว',
          'การลบเสร็จสมบูรณ์',
          'success'
        )
        this.list2 = await this.productService.getAllProduct().toPromise()
        // location.reload()
      }
    })
  }
  async submitaddpro() {
    console.log(this.addpro)
    await this.productService.insertProduct(this.addpro)
    this.list2 = await this.productService.getAllProduct().toPromise()
    location.reload()
  }
  async submitaddstock() {
    console.log(this.addstock)
    await this.stockService.insertStock(this.addstock)
    this.list = await this.stockService.getAllStock().toPromise()
    location.reload()
  }
  async lookout(id){
    this.list2 = await this.productService.getProduct(id).toPromise()
  }
  
}