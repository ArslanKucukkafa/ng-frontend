import { Injectable } from '@angular/core';
import { Laborant } from '../models/laborant';
import { HttpClient, HttpHeaders, HttpEvent, HttpRequest } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  loginLaborant(laborant:Laborant): Observable<any>{
      return this.http.post<Response>(environment.baseUrl + environment.loginUrl, JSON.stringify(laborant), { headers: { 'Content-Type': 'application/json' } });
  }
}
