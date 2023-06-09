import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpRequest } from '@angular/common/http';
import { Laborant } from '../models/laborant';
import { Response} from '../models/response'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  registerLaborant(laborant:Laborant): Observable<any>{
    return this.http.post<Response>
    (environment.baseUrl+environment.signupUrl,JSON.stringify(laborant),{headers:{'Content-Type': 'application/json' }})}
  }
