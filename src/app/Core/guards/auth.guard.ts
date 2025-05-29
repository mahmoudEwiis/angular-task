import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../Feature/auth/service/auth.service';
import { MessageService } from 'primeng/api';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const messageService = inject(MessageService);

  if (authService.isLoggedIn()) {
    return true;
  }

  messageService.add({
    severity: 'error',
    summary: 'Authentication Required',
    detail: 'You must be logged in to access this page.',
    life: 3000
  });

  return router.parseUrl('/auth/login');
};


export const adminGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const messageService = inject(MessageService);


  if (authService.isAdmin()) {
    return true;
  }
  // Toast

  messageService.add(
    {
      severity: 'error',
      summary: 'Access Denied',
      detail: 'You do not have permission to access this page.',
      life: 3000
    });


  return router.parseUrl('/');
};


export const publicGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const messageService = inject(MessageService);

  if (authService.isLoggedIn()) {
    messageService.add({
      severity: 'info',
      summary: 'Already Logged In',
      detail: 'You are already logged in.',
      life: 3000
    });
    return router.parseUrl('/');
  }
  return true;
}