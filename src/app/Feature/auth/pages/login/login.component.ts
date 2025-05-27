import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../Shared/components/button/button.component';
import { InputFieldComponent } from "../../../../Shared/components/input-field/input-field.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [
    ButtonComponent, 
    InputFieldComponent,
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;
      setTimeout(() => {
        console.log('Login successful', this.loginForm.value);
        this.isLoading = false;
      }, 2000);
    } else {
      console.log('Form is invalid');
    }
  }

}
