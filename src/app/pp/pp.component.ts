import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { MonthService } from "../services/month.service"
import { AccService } from "../services/acc.service"
import { async } from '@angular/core/testing';
@Component({
  selector: 'app-pp',
  templateUrl: './pp.component.html',
  styleUrls: ['./pp.component.css']
})
export class PpComponent implements OnInit {
  list: any = [];
  list2: any = [];
  addmonth: any = {
    month: ""
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
  addpro: any = {
    date: "", name: "", time: "", cost: null, month: null
  }
  constructor(
    private monthService: MonthService,
    private accService: AccService
  ) { }
  
  async ngOnInit() {
    this.list = await this.monthService.getAllMonth().toPromise()
    this.list2 = await this.accService.getAllAcc().toPromise()
  }

  async submitaddmonth() {
    
    await this.monthService.insertMonth({month: new Date().getMonth()})
    this.list = await this.monthService.getAllMonth().toPromise()
  }

  deletemonth(data) {
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
        let deleteMonth = await this.monthService.deleteMonth(data._id)
        let deleteAllAcc = await this.accService.deleteAllAcc(data._id)
        Swal.fire(
          'ลบแล้ว',
          'การลบเสร็จสมบูรณ์',
          'success'
        )
        this.list = await this.monthService.getAllMonth().toPromise()
    this.list2 = await this.accService.getAllAcc().toPromise()
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
    }).then(async(result) => {
      if (result.value) {
        let deleteAcc = await this.accService.deleteAcc(data._id)
        Swal.fire(
          'ลบแล้ว',
          'การลบเสร็จสมบูรณ์',
          'success'
        )
        this.list2 = await this.accService.getAllAcc().toPromise()
      }
    })
  }
  async lookout(id){
    this.list2 = await this.accService.getAcc(id).toPromise();
  }
}
