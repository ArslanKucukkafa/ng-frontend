import { Component, OnInit } from '@angular/core';
import { DetailLaborant } from 'src/app/models/laborant';
import { Response } from 'src/app/models/response';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-laborant-detail',
  templateUrl: './laborant-detail.component.html',
  styleUrls: ['./laborant-detail.component.scss']
})
export class LaborantDetailComponent implements OnInit {
  
  response:Response

  DetailsDto:DetailLaborant={  
  ad:"",
  soyad:"",
  laborantId:"",
  rolename:"",
  reportCount:0
}

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.viewDetails()
  }


  viewDetails(){
     this.adminService.laborantDetail(this.adminService.lab_id).subscribe(data=>{
     console.log(data)
     this.DetailsDto=data
     console.log(this.DetailsDto,"---------DetailsDto")
    })
  }

  deleteUser(){
    this.adminService.deleteUser(this.DetailsDto.laborantId).subscribe(response =>{
      console.log(response)
      this.response=response
      console.log(response.message)

    })
  }

  roleUpgrade(){
    this.adminService.upgradeRole(this.DetailsDto.laborantId).subscribe(data => {
      console.log(data)
    })
  }
}
