import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { FileHandle } from 'src/app/models/file-handle';
import { Report, UpdateBody } from 'src/app/models/report';



@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss']
})
export class ReportDetailsComponent implements OnInit {


  report:UpdateBody={
    reportId:0,
    patient_firstname :"",
    patient_lastname:"",
    patient_identity_no:"",
    dfnTitle:"",
    dfnDetails:"",
    create_date:new Date()
  }


  thumbnail: any;
  response:any;
  filehandle:FileHandle[]=[];
  constructor(private reportService:ReportService,private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.reportViewDetail();
  }

  reportViewDetail(){
    this.reportService.detailReport(this.reportService.report_ıd).subscribe(data =>{
      this.response=data;
      let objectURL= 'data:'+data.image.image_type+';base64,'+data.image.data;
      this.thumbnail = this._sanitizer.bypassSecurityTrustUrl(objectURL);
    })
  }

  deleteReport(){
    console.log("Delete is running",this.response.dfnTitle)
    this.reportService.deleteReport(this.response.reportId).subscribe(data =>{
      console.log(data)
    })
  }
  onFileSelected(event:any){
    if(event.target.files){
    const file= event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
			this.thumbnail = reader.result;}
     
      const fileHandle:FileHandle ={
        file:file,
        url: this._sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        )
      }
      this.filehandle.push(fileHandle);
      console.log(fileHandle.file.name)
    }
    }

    convertFormData(report:UpdateBody,filehandle:FileHandle[]):FormData{
      console.log("-------------------------")
      console.log(filehandle[0].file.name)
      const formData:FormData = new FormData();
      console.log(report)
      formData.append("ReportGetDto",new Blob([JSON.stringify(report)],{type:'application/json'}))
      formData.append("image",filehandle[0].file,filehandle[0].file.name)
      return formData;}


    updateReport(){
      this.report.dfnTitle=this.response.dfnTitle
      this.report.dfnDetails=this.response.dfnDetails
      this.report.reportId=this.response.reportId
      this.report.patient_firstname=this.response.patient_firstname
      this.report.patient_lastname=this.response.patient_lastname
      this.report.patient_identity_no=this.response.patient_identity_no

      console.log(this.report)
      const reportFormData =this.convertFormData(this.report,this.filehandle)
      this.reportService.updateReport(reportFormData).subscribe(data =>{
        console.log(data.message)
      })
    }

    clearLocalstore(){
      this.reportService.clearLocalstorage();
    }
}
