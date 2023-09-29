import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validator,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  productForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.fb.group({
      details: this.fb.group({
        quotenumber: ['', Validators.required],
        location: ['', Validators.required],
        eConsumption: ['', Validators.required],
        billingInformation: ['', Validators.required],
        availableRoofSpace: ['', Validators.required],
        batteryStorage: ['', Validators.required],
      })
    });
  }
}
