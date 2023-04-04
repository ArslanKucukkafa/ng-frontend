import { Component, OnInit } from '@angular/core';
import { ReportGet } from 'src/app/models/report';
import { AdminService } from 'src/app/services/admin.service';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  reportGet:ReportGet={
    reportId:0,
    patient_firstname:"",
    patient_lastname:"",
    patient_identity_no:"",
    dfnTitle:"",
    dfnDetails:"",
    create_date: new Date

  }


  constructor(private reportService:ReportService) {}

  ngOnInit(): void {
    this.listReport()
  }

  listReport(){
    this.reportService.listReport().subscribe(data =>{
      console.log(data);
      this.reportGet=data
      })
    }

}
