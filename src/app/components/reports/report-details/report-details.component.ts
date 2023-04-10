import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss']
})
export class ReportDetailsComponent implements OnInit {
  thumbnail: any;
  response:any;
  constructor(private reportService:ReportService,private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.reportViewDetail()
  }

  reportViewDetail(){
    this.reportService.detailReport(this.reportService.report_ıd).subscribe(data =>{
      this.response=data;
      let objectURL= 'data:'+data.image.image_type+';base64,'+data.image.data;
      this.thumbnail = this._sanitizer.bypassSecurityTrustUrl(objectURL);
    }
      )
  }

}
