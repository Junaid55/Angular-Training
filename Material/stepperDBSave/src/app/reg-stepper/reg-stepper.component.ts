import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { FormServiceService } from '../services/form-service.service';

@Component({
  selector: 'app-reg-stepper',
  templateUrl: './reg-stepper.component.html',
  styleUrls: ['./reg-stepper.component.css']
})
export class RegStepperComponent {
  count1:any
  count:any
  remainingp:any
  remainingm:any
  


  firstFormGroup = this._formBuilder.group({
  name: ['', [Validators.required,Validators.maxLength(32),Validators.minLength(6)]],
    email: ['', Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")],
    fname: ['', [Validators.required,Validators.maxLength(32),Validators.minLength(6)]],
    mname: ['', [Validators.required,Validators.maxLength(32),Validators.minLength(6)]],
    gdr: ['', Validators.required],
    dob: ['', Validators.required],
    mobile:['', [Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern("^[6-9]\d{9}$")]],
    
  });
  
  
  secondFormGroup = this._formBuilder.group({
    accno: [''],
    bankname: [''],
    ifsc: [''],
    ibanking: [''],
    mbanking: ['']
  });

  thirdFormGroup = this._formBuilder.group({

    pradd: ['',[Validators.required,Validators.maxLength(60)]],
    permanentadd:['',[Validators.required,Validators.maxLength(60)]]
   
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder,private http:FormServiceService) {}

  ngDoCheck(): void {
    this.count=this.thirdFormGroup.controls['pradd'].value?.length
    this.count1=this.thirdFormGroup.controls['permanentadd'].value?.length
    
    this.remainingp=60-this.count
    this.remainingm=60-this.count1
  }
    
   //this.count=this.count+1
    //console.log(this.count)
  
  submit()
  {
    //console.log(this.thirdFormGroup.value)
   //this.count=this.count+1
   if (this.firstFormGroup.valid && this.secondFormGroup.valid && this.thirdFormGroup.valid) {
    
    const data = {
    ...this.firstFormGroup.value,
    ...this.secondFormGroup.value,
    ...this.thirdFormGroup.value
    };
    
    // Continue with your submit operation
    console.log(data)

    this.http.saveData(data).subscribe(
      {
        next:(fdata)=>
        {
          console.log(fdata)
          alert('successful')
        },
        error:(err)=>
        {
          console.log(err)
        }
      }
    )



  }
  }

}
