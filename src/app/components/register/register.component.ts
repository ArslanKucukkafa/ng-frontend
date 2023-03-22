import { Component, OnInit } from '@angular/core';
import { FormBuilder ,ReactiveFormsModule} from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

   registerForm:any;

  constructor(private registerService:RegisterService,private formBuilder:FormBuilder) {}

  ngOnInit(): void {}
  
  register():void{

  } 
}
