import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule,ReactiveFormsModule,JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
   constructor(private Fb :FormBuilder){}
   loginForm = this.Fb.group({
    userName : [''],
    password : ['']
  });

  onSubmit(){
    console.log("Login Data", this.loginForm.value)
  }

}
