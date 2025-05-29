import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { adminGuard, authGuard } from '../Core/guards/auth.guard';

export const SYSTEM_ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        canActivate: [authGuard , adminGuard ],
        loadComponent: () => import('./pages/dashboard/dashboard.component').then(c => c.DashboardComponent)
      },
      {
        path: 'products',
        loadComponent: () => import('./pages/product-list/product-list.component').then(c => c.ProductListComponent)
      },
      {
        path: 'product/:id',
        loadComponent: () => import('./pages/product-detail/product-detail.component').then(c => c.ProductDetailComponent)
      }
    ]
  }
];