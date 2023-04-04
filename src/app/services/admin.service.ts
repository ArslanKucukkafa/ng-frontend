import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpRequest } from '@angular/common/http';
import { Response} from '../models/response'
import { DetailLaborant, LaborantGet } from '../models/laborant';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  lab_id:String

  auth_token=localStorage.getItem("token")
  
  headers = new HttpHeaders({
    'Accept':'*/*', 
    'Access-Control-Allow-Origin' : '*',
    'Authorization': `Bearer ${this.auth_token}`
    }) 

  constructor(private http: HttpClient) { }

  laborantDetail(laborant_id:String){
    return this.http.get<DetailLaborant>(environment.baseUrl+environment.getLaborantDetails+laborant_id,{headers:this.headers})
  }

  listLaborant(isActive:boolean){
    return this.http.get<LaborantGet[]>(environment.baseUrl+environment.getLaborants+"/"+isActive,{headers:this.headers})
  }

  
  deleteUser(id:string){
    let options = {headers:this.headers};
    console.log(this.headers)
    return this.http.post<Response>(environment.baseUrl+environment.deleteLaborant+id,null,options)
  }

  upgradeRole(id:String){
    let options = {headers:this.headers};
    return this.http.post<Response>(environment.baseUrl+environment.roleUpgrage+id,options)
  }

  confirmAccount(id:String){
  let options = {headers:this.headers};
  return this.http.put<Response>(environment.baseUrl+environment.activateLaborant+id,options)
  }

}
