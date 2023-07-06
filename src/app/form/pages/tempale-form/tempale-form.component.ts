import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'forms-tempale-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './tempale-form.component.html',
  styleUrls: ['./tempale-form.component.less'],
})
export class TempaleFormComponent {
  genders = [{
    key:'Male',
    label : 'Male'
  },{
    key:'Female',
    label : 'Female'
  } ]
  onSubmit(myForm: NgForm) {
    if (myForm.valid) {
      console.log(myForm.value);
    }
  }
}
