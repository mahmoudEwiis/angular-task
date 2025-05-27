import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../Shared/components/button/button.component';
import { InputFieldComponent } from "../../../../Shared/components/input-field/input-field.component";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../service/auth.service';
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

  usernameControl!: FormControl;
  passwordControl!: FormControl;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.usernameControl = this.loginForm.get('username') as FormControl;
    this.passwordControl = this.loginForm.get('password') as FormControl;
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;
      const { username, password } = this.loginForm.value;
      this.authService.login(username, password).subscribe({
        next: (response) => {
          console.log('Login successful:', response);
          this.authService.setToken(response.accessToken);
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Login failed:', error);
          this.isLoading = false;
        }
      });
    } else {
      console.error('Form is invalid');
      this.isLoading = false;
    }
  }
}
