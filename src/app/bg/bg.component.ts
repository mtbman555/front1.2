import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { MainService } from "../services/main.service"
import { FoodService } from "../services/food.service"
import { CheckService } from "../services/check.service"
import { ProductService } from "../services/product.service"
import { AccService } from "../services/acc.service"
import { async } from '@angular/core/testing';
import { MonthService } from '../services/month.service';

@Component({
  selector: 'app-bg',
  templateUrl: './bg.component.html',
  styleUrls: ['./bg.component.css']
})
export class BgComponent implements OnInit {
  cost: number = 0;
  list: any = [];
  list2: any = [];
  list3: any = [];
  acc: any = [];
  menu: any = [];
  product: any = [];
  modeltable: any = {
    table: ""
  }
  modalacc: any = {
    month: "" ,money: null
  }
  modal1: any = {
    table: "", name: "", no: null,time: ""
  }
  modalmenu: any = {
    name: "", cost: null
  }
  modallast: any ={
    table: "", amount: "", cost: "" 
  }
  monthList = [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม"
  ]
  constructor(
    private mainService: MainService,
    private foodService: FoodService,
    private checkService: CheckService,
    private productService: ProductService,
    private accService: AccService,
    private monthService: MonthService
  ) { }

  async ngOnInit() {
    this.acc = await this.monthService.getAllMonth().toPromise()
    this.menu = await this.foodService.getAllFood().toPromise()
    this.product =await this.productService.getAllProduct().toPromise()
    this.list = await this.mainService.getAllMain().toPromise()
    this.list2 = await this.checkService.getAllCheck().toPromise()
    this.cost = this.list2.filter((item) =>item.cost).map((item) => +item.cost).reduce((sum, current) => sum + current);
    this.modalacc.month = this.acc[0].month
    
  }
  alertpay(money){
    Swal.fire(
      'เงินทอนทั้งหมด',
      money + ' บาท',
      'success'
    )
    
  }
  deletecus(data: { _id: any; }){
    Swal.fire({
      title: 'Are you sure?',
      text: "คุณยืนยันใช่ไหมที่จะลบ",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: 'ยกเลิก',
      confirmButtonText: 'ยืนยัน'
    }).then(async(result) => {
      let deleteMain = await this.mainService.deleteMain(data._id)
      if (result.value) {
        deleteMain ? Swal.fire(
          'ลบแล้ว',
          'การลบเสร็จสมบูรณ์',
          'success'
        ) : null
        this.list = await this.mainService.getAllMain().toPromise()
      }
    })
  }
  deletelist(data: any){
    Swal.fire({
      title: 'Are you sure?',
      text: "คุณยืนยันใช่ไหมที่จะลบ",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: 'ยกเลิก',
      confirmButtonText: 'ยืนยัน'
    }).then(async(result) => {
      let deleteCheck = await this.checkService.deleteCheck(data._id)
      if (result.value) {
        deleteCheck ?Swal.fire(
          'ลบแล้ว',
          'การลบเสร็จสมบูรณ์',
          'success'
        ): null
        this.list2 = await this.checkService.getAllCheck().toPromise()
      }
    })
  }

  deletemenu(data: { _id: any; }){
    Swal.fire({
      title: 'Are you sure?',
      text: "คุณยืนยันใช่ไหมที่จะลบ",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: 'ยกเลิก',
      confirmButtonText: 'ยืนยัน'
    }).then(async(result) => {
      let deleteFood = await this.foodService.deleteFood(data._id)
      if (result.value) {
        Swal.fire(
          'ลบแล้ว',
          'การลบเสร็จสมบูรณ์',
          'success'
        )
        this.menu = await this.foodService.getAllFood().toPromise()
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
        location.reload()
      }
    })
  }
  async pay(){
    console.log(this.modalacc)
    let value = {
      products: this.list2,
      month: this.modalacc.month
    }
    console.log(value)
    await this.accService.insertAcc(value)
    await this.productService.updateProduct(this.list2)
    let deleteCheck2 = await this.checkService.deleteCheckByName(this.list2)
    this.cost = this.list2.filter((item) =>item.cost).map((item) => +item.cost).reduce((sum, current) => sum + current);
    let money = this.modalacc.money - this.cost
    this.alertpay(money)
  }
  async submitlast(){
    
    await this.checkService.insertCheck3(this.modallast)
    this.list2 = await this.checkService.getCheckByTable(this.modallast.table).toPromise()
    this.cost = this.list2.filter((item) =>item.cost).map((item) => +item.cost).reduce((sum, current) => sum + current);
    location.reload()
  }
  async submitfood(data: any) {
    
    console.log(this.modeltable)
    let tmp = Object.assign(this.modeltable, data)
    console.log(tmp)
    await this.checkService.insertCheck(tmp)
    location.reload()
    // this.list = await this.checkService.getAllCheck().toPromise()
  }
  async submitpro(data: any){
    await this.checkService.insertCheck2(data)
    location.reload()
  }
  async submit() {
    console.log(this.modal1)
    await this.mainService.insertMain(this.modal1)
    this.list = await this.mainService.getAllMain().toPromise()
  }
  async submitmenu() {
    console.log(this.modalmenu)
    await this.foodService.insertFood(this.modalmenu)
    this.menu = await this.foodService.getAllFood().toPromise()
    location.reload()
  }
  async lookcheck(table){
    this.cost = 0
    this.list2 = await this.checkService.getCheckByTable(table).toPromise()
    this.cost = this.list2.filter((item) =>item.cost).map((item) => +item.cost).reduce((sum, current) => sum + current);
  }
  async lookpro(){
    this.cost = 0
    this.list2 = await this.checkService.getCheckByNull().toPromise()
    this.cost = this.list2.filter((item) =>item.cost).map((item) => +item.cost).reduce((sum, current) => sum + current);
  }
}
