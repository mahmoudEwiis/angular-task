import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'system',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./Feature/auth/auth.routes').then(m => m.AUTH_ROUTES)
  },
  {
    path: 'system',
    loadChildren: () => import('./Feature/System/system.routes').then(m => m.SYSTEM_ROUTES)
  },
];