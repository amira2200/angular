import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-residence',
  templateUrl: './form-residence.component.html',
  styleUrls: ['./form-residence.component.css'],
})
export class FormResidenceComponent {
  userName: FormControl = new FormControl('');
  formUser: FormGroup = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl({value:'Abdellaoui',disabled:true}),
    address: new FormGroup({
      street: new FormControl('',[Validators.pattern('[0-9]+')]),
      city: new FormControl('',[Validators.required,Validators.minLength(5)])
    })
  });

  get street() {
    return this.formUser.get('address')!.get('street');
  }
  showUserName() {
    console.log(this.userName.value);
  }

  showFormUser() {
    console.log(this.formUser)
    console.log(this.formUser.controls)
    console.log(this.formUser.value)
    console.log(this.formUser.getRawValue());
  }
}
