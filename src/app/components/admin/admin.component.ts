import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LaborantGet } from 'src/app/models/laborant';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {


    message:string = "hallo mundo"

    laborantArray: Array<LaborantGet> = []; 

    laborant:LaborantGet={
      id:0,
      ad:"",
      soyad:"",
      laborantId:"",
      enabled:false
    }
  constructor(public adminService:AdminService,private router:Router) { }

  ngOnInit(): void {
      this.laborantList()
  }


  laborantList(){
    this.adminService.listLaborant(true).subscribe(list =>{
      this.laborantArray=list;
    })
  }

  detail(lab_id:String){
  this.adminService.lab_id=lab_id
  this.router.navigate(['/admin/detail'])
  }


  clearLocalstore(){
    this.adminService.clearLocalstorage();
  }
}
