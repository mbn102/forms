import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, Validators, ReactiveFormsModule, AbstractControl} from "@angular/forms";

@Component({
  selector: 'forms-reactive',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.less'],
})
export class ReactiveComponent {
  myForm: FormGroup;
    genders = [{
        key:'Male',
        label : 'Male'
    },{
        key:'Female',
        label : 'Female'
    } ]
  constructor() { }

  ngOnInit() {
   this.myForm =new FormGroup<any>({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null,  [Validators.required, Validators.email]),
      password:new FormControl(null, [Validators.required, Validators.minLength(8)]),
       gender:new FormControl(null,[Validators.required])
    });
  }


  onSubmit() {
    if (this.myForm.invalid) {
      return;
    }
    console.log(this.myForm.value);
  }
}
