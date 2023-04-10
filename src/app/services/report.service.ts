import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpRequest } from '@angular/common/http';
import { Response} from '../models/response'
import { Report, ReportDetail, ReportGet } from '../models/report';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Token } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class ReportService {

  auth_token=localStorage.getItem("token")

  report_ıd:number


  constructor(private http: HttpClient) { }

   headers = new HttpHeaders({
    'Accept':'*/*', 
    'Access-Control-Allow-Origin' : '*',
    'Authorization': `Bearer ${this.auth_token}`
    }) 


  saveReport(report:FormData):Observable<any>{
    return this.http.post<Response>(environment.baseUrl+environment.saveReport,report,{headers:this.headers})
  }

  listReport(){
    return this.http.get<ReportGet[]>(environment.baseUrl+environment.getReports,{headers:this.headers})
  }

  detailReport(reportID:number){
    return this.http.get<ReportDetail>(environment.baseUrl+environment.getReport+reportID,{headers:this.headers})
  } 

}
