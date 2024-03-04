import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ FormsModule,ReactiveFormsModule,JsonPipe],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(private Fb :FormBuilder){}
  registerForm = this.Fb.group({
   userName : [''],
   password : ['']
 });

 onSubmit(){
   console.log("Login Data", this.registerForm.value)
 }
}
