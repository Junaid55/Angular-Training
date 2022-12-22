import { Component } from '@angular/core';
import { User } from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TDF';
  subArr=['Basic','Advance','Pro'];
  show:boolean;

   invalidForm=false;
   constructor()
   {
    this.show=false;
   }

  userModel:User=
  {
    email:'',
    subscription:'--Select--',
    password:''

  }
  btnClicked()

  {
    if(this.userModel.email=='' || this.userModel.password=='' || this.userModel.subscription=='--Select--')
    {
      this.invalidForm=true;
    } 
    else
    {
      this.invalidForm=false;
      this.show=true;
    }
   

  }
}
