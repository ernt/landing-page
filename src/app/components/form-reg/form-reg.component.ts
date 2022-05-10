import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-form-reg',
  templateUrl: './form-reg.component.html',
  styleUrls: ['./form-reg.component.css']
})
export class FormRegComponent implements OnInit {

 form:FormGroup;

  constructor() {
    this.form = new FormGroup({
      'username': new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      'password1': new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      'password2': new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      'recaptcha':new FormControl('', [
        Validators.required
      ])
    });
  }
  


  login(){
    console.log(this.form.value);
    console.log(this.form);
    
  
  }
  
  ngOnInit() {
  }


}
