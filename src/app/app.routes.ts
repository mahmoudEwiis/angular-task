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
    loadChildren: () => import('./System/system.routes').then(m => m.SYSTEM_ROUTES)
  },
  {
    path: '**',
    loadComponent: () => import('../app/System/pages/page-not-found/page-not-found.component').then(c => c.PageNotFoundComponent)
  }
];