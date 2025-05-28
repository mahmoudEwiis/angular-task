import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const SYSTEM_ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
    //   {
    //     path: '',
    //     redirectTo: 'dashboard',
    //     pathMatch: 'full'
    //   },
    //   {
    //     path: 'dashboard',
    //     loadComponent: () => import('./pages/dashboard/dashboard.component').then(c => c.DashboardComponent)
    //   },
    //   {
    //     path: 'products',
    //     loadChildren: () => import('./feature/product/product.routes').then(m => m.PRODUCT_ROUTES)
    //   }
    ]
  }
];