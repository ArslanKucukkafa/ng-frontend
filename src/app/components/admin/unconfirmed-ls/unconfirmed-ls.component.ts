import { Component, OnInit } from '@angular/core';
import { LaborantGet } from 'src/app/models/laborant';
import { AdminService } from 'src/app/services/admin.service';
import { Response } from 'src/app/models/response';

@Component({
  selector: 'app-unconfirmed-ls',
  templateUrl: './unconfirmed-ls.component.html',
  styleUrls: ['./unconfirmed-ls.component.scss']
})
export class UnconfirmedLsComponent implements OnInit {

  unconfirmedLaborantArray: Array<LaborantGet> = []; 

  laborant:LaborantGet={
    id:0,
    ad:"",
    soyad:"",
    laborantId:"",
    enabled:false
  }

  constructor(private adminService:AdminService) {}

  ngOnInit(): void {
    this.listUnconfirmedAccount()
  }
  listUnconfirmedAccount(){
    this.adminService.listLaborant(false).subscribe(data =>{
      this.unconfirmedLaborantArray=data;
    })
  }

  confrimAccount(id:String){
    console.log(id)
    let response:Response
    this.adminService.confirmAccount(id).subscribe(data=>{
    response=data;
    })
  }

  deleteUnconfirmedAccount(id:string){
    let response:Response
    this.adminService.deleteUser(id).subscribe(data=>{
    response = data
    })
  }


  clearLocalstore(){
    this.adminService.clearLocalstorage();
  }

}
