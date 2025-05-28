import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; 
import { providePrimeNG } from 'primeng/config'; 
import Aura from '@primeng/themes/aura';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './Core/interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(withInterceptors([authInterceptor])) , provideAnimationsAsync(), providePrimeNG({ theme: { preset: Aura } }) , provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};




