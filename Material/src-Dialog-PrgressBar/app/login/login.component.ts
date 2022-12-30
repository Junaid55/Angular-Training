import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showProgressBar=false;
  constructor(private fb:FormBuilder)
  {

  }
  form =this.fb.group({
    username:['',Validators.required,Validators.pattern("^[a-zA-Z0-9 ]*$")],
    password: ['',Validators.required]
  });

  submit() {
    this.showProgressBar=true;
    if(this.form.controls['username'].value=='admin' && this.form.controls['password'].value=='admin' )
    {
      
      setTimeout(()=>
      {
        alert('login Successful')
        this.showProgressBar=false
      },3000)
      //alert('login Successful')
    }
    else{
      setTimeout(()=>
      {
        alert('Invalid Credentials')
        this.showProgressBar=false
      },3000)
     
    }
    
   }
  
  
}
