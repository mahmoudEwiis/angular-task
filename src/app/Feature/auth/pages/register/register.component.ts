// import { AuthService } from './../../service/auth.service';
// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { Router, RouterLink } from '@angular/router';
// import { InputFieldComponent } from '../../../../Shared/components/input-field/input-field.component';
// import { ButtonComponent } from '../../../../Shared/components/button/button.component';

// @Component({
//   selector: 'app-register',
//   imports: [
//     CommonModule,
//     ReactiveFormsModule,
//     RouterLink,
//     InputFieldComponent,
//     ButtonComponent
//   ],
//   templateUrl: './register.component.html',
//   styleUrl: './register.component.scss'
// })
// export class RegisterComponent {
//   registerForm: FormGroup;
//   isLoading = false;

//   constructor(
//     private fb: FormBuilder,
//     private router: Router,
//     private AuthService: AuthService
//   ) {
//     this.registerForm = this.fb.group(
//       {
//         name: ['', [Validators.required]],
//         email: ['', [Validators.required, Validators.email]],
//         password: ['', [Validators.required, Validators.minLength(6)]],
//         confirmPassword: ['', [Validators.required]],
//         agreeTerms: [false, [Validators.requiredTrue]]
//       },
//       {
//         validators: this.passwordMatchValidator.bind(this)
//       }
//     );
//   }

// passwordMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
//   const password = group.get('password')?.value;
//   const confirmPassword = group.get('confirmPassword')?.value;

//   return password === confirmPassword ? null : { passwordsDoNotMatch: true };
// }

//   onSubmit(): void {
//     if (this.registerForm.invalid) {
//       this.registerForm.markAllAsTouched();
//       return;
//     }
//     this.isLoading = true;

//     const { name, email, password } = this.registerForm.value;
//     this.AuthService.register(name, email, password).subscribe({
//       next: (response) => {
//         console.log('Registration successful:', response);
//         this.router.navigate(['/auth/login']);
//       },
//       error: (error) => {
//         console.error('Registration failed:', error);
//         this.isLoading = false;
//       }
//     });
//   }
// }




import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router, RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from '../../../../Shared/components/input-field/input-field.component';
import { ButtonComponent } from '../../../../Shared/components/button/button.component';

@Component({
  selector: 'app-register',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    InputFieldComponent,
    ButtonComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm: FormGroup;
  isLoading = false;

  nameControl!: FormControl;
  usernameControl!: FormControl;
  emailControl!: FormControl;
  passwordControl!: FormControl;
  confirmPasswordControl!: FormControl;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private AuthService: AuthService
  ) {
    this.registerForm = this.fb.group(
      {
        name: ['', [Validators.required]],
        username: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validators: this.passwordMatchValidator.bind(this)
      }
    );

    this.nameControl = this.registerForm.get('name') as FormControl;
    this.emailControl = this.registerForm.get('email') as FormControl;
    this.usernameControl = this.registerForm.get('username') as FormControl;
    this.passwordControl = this.registerForm.get('password') as FormControl;
    this.confirmPasswordControl = this.registerForm.get('confirmPassword') as FormControl;
  }

  passwordMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { passwordsDoNotMatch: true };
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    this.isLoading = true;

    const { name, username, email, password } = this.registerForm.value;
    this.AuthService.register(name, username, email, password).subscribe({
      next: (response:any) => {
        console.log('Registration successful:', response);
        this.router.navigate(['/auth/login']);
      },
      error: (error:any) => {
        console.error('Registration failed:', error);
        this.isLoading = false;
      }
    });
  }
}
