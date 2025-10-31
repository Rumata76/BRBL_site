import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inscription-kirundi',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'

  ]
})
export class InscriptionComponent {
  inscriptionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.inscriptionForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      birthdate: ['', Validators.required],
      country: ['', Validators.required],
      nationality: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      type: ['', Validators.required],
      level: ['', Validators.required],
      course: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.inscriptionForm.valid) {
      console.log('Form Data Submitted:', this.inscriptionForm.value);
    }
  }
}
