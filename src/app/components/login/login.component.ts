import { Component, OnInit } from '@angular/core';
import { FormBuilder ,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Response } from 'src/app/models/response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  private response!:Response;

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
        console.log(res)
        this.response=res;
        console.log(this.response.message)
      })
  }

}
