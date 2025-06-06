import { Injectable } from '@angular/core';
import { ApiService } from '../../../Core/services/api.service';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly USER_KEY = 'auth_user';
  private currentUserSubject = new BehaviorSubject<any | null>(this.getUserFromStorage());

  constructor(
    private apiService: ApiService,
    private router: Router,
    private messageService: MessageService
  ) { }

  login(username: string, password: string): Observable<any> {
    return this.apiService.post('auth/login', { username, password }).pipe(
      tap((response: any) => {
        this.setToken(response?.token);
        this.messageService.add({
          severity: 'success',
          summary: 'Login Successful',
          detail: 'You have logged in successfully.',
          life: 1000,
        });
      }),
      catchError((error: any) => {
        console.error('Login failed', error);
        return throwError(() => error);
      })
    );
  }

  register(name: string, username: string, email: string, password: string): Observable<any> {
    const newUser = {
      firstName: name,
      username,
      email,
      password
    };
    return this.apiService.post('users/add', newUser).pipe(
      tap((response: any) => {
        console.log('User registered (simulated):', response);
        this.messageService.add({
          severity: 'success',
          summary: 'Registration Successful',
          detail: 'You have registered successfully. Please log in.',
          life: 1000,
        });
      }),
      catchError((error: any) => {
        console.error('Registration failed', error);
        return throwError(() => error);
      })
    );
  }

  getCurrentUser(): Observable<any> {
    return this.apiService.get('auth/me').pipe(
      tap((user: any) => {
        console.log('Current user (simulated):', user);
        localStorage.setItem(this.USER_KEY, JSON.stringify(user));
        this.currentUserSubject.next(user);
      }),
      catchError((error: any) => {
        console.error('Failed to fetch current user', error);
        return throwError(() => error);
      })
    );
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.currentUserSubject.next(null);
    this.router.navigate(['/auth/login']);
    this.messageService.add(
      {
        severity: 'info',
        summary: 'Logged Out',
        detail: 'You have been logged out successfully.',
        life: 1000,
      });
  }

  isAdmin(): boolean {
    const user = this.getUserFromStorage();
    return user && user.role === 'admin';
  }
  
  get currentUser$(): Observable<any | null> {
    return this.currentUserSubject.asObservable();
  }
  
  get currentUser(): any | null {
    return this.currentUserSubject.value;
  }
  private getUserFromStorage(): any | null {
    const user = localStorage.getItem(this.USER_KEY);
    return user ? JSON.parse(user) : null;
  }
}
