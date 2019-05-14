import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { MemberService } from "../services/member.service"
import { async } from 'q';

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
    id: "", name:"", lname:"", nname:"", mail:"", point: 0
  }
  modalpoint:any = {
    id: "", point: null
  }
  constructor(private memberService: MemberService,) { }

  async ngOnInit() {
    this.mem = await this.memberService.getAllMember().toPromise()
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
    }).then(async(result) => {
      if (result.value) {
        let deleteMember = await this.memberService.deleteMember(data._id)
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
  async submitmem() {
    console.log(this.modalmem)
    await this.memberService.insertMember(this.modalmem)
    this.mem = await this.memberService.getAllMember().toPromise()
    location.reload()
  }
  // async addpoint(id,point){
  //   let tmp = await this.memberService.getPoint(id).toPromise()
  //   console.log(tmp)
  //   let updatePoint = await this.memberService.updatePoint(id,point+tmp)
  //   location.reload()
  // }
  async addpoint(){
    
    await this.memberService.upPoint(this.modalpoint)
    location.reload()
  }
  async subpoint(){
    await this.memberService.downPoint(this.modalpoint)
    location.reload()
  }
}
