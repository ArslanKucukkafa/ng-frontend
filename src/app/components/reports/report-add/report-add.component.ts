import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Report } from 'src/app/models/report';
import { ReportService } from 'src/app/services/report.service';
import { Response } from 'src/app/models/response';
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { FileHandle } from 'src/app/models/file-handle';

@Component({
  selector: 'app-report-add',
  templateUrl: './report-add.component.html',
  styleUrls: ['./report-add.component.scss']
})


export class ReportAddComponent implements OnInit {
  report:Report={
    patient_firstname :"",
    patient_lastname:"",
    patient_identity_no:"",
    dfnTitle:"",
    dfnDetails:"",
    image:[]
  }

   response:Response;

  constructor(private router:Router,private reportService:ReportService,private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
  }



  onFileSelected(event:any){
    if(event.target.files){
    const file= event.target.files[0];
    const fileHandle:FileHandle ={
      file:file,
      url: this.sanitizer.bypassSecurityTrustUrl(
        window.URL.createObjectURL(file)
      )
    }
    this.report.image.push(fileHandle)
    }
  }

  convertFormData(report:Report):FormData{
    const formData:FormData = new FormData();

    formData.append("reportSaveDto",new Blob([JSON.stringify(report)],{type:'application/json'}))

    formData.append("image",report.image[0].file,report.image[0].file.name)

    return formData;
  }



  save(){
        const reportFormData =this.convertFormData(this.report)
        this.reportService.saveReport(reportFormData).subscribe(res=>{
        this.response=res;
        if(this.response.status==true){console.log("Succesfuly")}
        else{console.log("error oluştu aq")}
      })
  }
}
