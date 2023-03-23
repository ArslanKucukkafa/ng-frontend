import { Component, OnInit } from '@angular/core';
import { FormBuilder ,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { Response } from 'src/app/models/response';
import { RegisterService } from 'src/app/services/register.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  private response!:Response;

  registerForm: any;

  constructor(private router:Router,private formBuilder:FormBuilder,private registerService:RegisterService) {
    this.createForm();
   }

  ngOnInit(): void {
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      name: '',
      surname: '',
      laborant_id: '',
      password: ''
        });
  }


  register(): void {
    this.registerService.registerLaborant(this.registerForm.value).subscribe(res=> {
      console.log(res)
      this.response=res
      if(res.status==true){this.router.navigate(['/login']);}
      else{console.log('occured to exception to until save laborant')}
    })
  }

}
