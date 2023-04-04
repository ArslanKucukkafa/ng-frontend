import { Component, OnInit } from '@angular/core';
import { FormBuilder ,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Response } from 'src/app/models/response';
import { LoginResponse } from 'src/app/models/loginResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  private response!:LoginResponse;

  loginForm: any;

  constructor(private router:Router,private formBuilder:FormBuilder,private loginService:LoginService) {
    this.createForm();
   }

   createForm() {
    this.loginForm = this.formBuilder.group({
      laborant_id: '',
      password: ''
        });
  }

  ngOnInit(): void {
  }

  login():void{
      this.loginService.loginLaborant(this.loginForm.value).subscribe(res =>{
        this.response=res;
        if(this.response.status==true){
          if(this.response.rol=="LABORANT"){
            localStorage.setItem("token",this.response.token)
            localStorage.setItem("rol",this.response.rol)
            this.router.navigate(['/report'])
          }
        else{{
          this.router.navigate(['/admin'])
        }
      }
      }else{
        this.router.navigate(['/**'])
      }
    })
  }

}
