import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { publicGuard } from '../../Core/guards/auth.guard';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        canActivate: [publicGuard],
        loadComponent: () => import('./pages/login/login.component').then(c => c.LoginComponent)
      },
      {
        path: 'register',
        canActivate: [publicGuard],
        loadComponent: () => import('./pages/register/register.component').then(c => c.RegisterComponent)
      }

    ]
  }
];