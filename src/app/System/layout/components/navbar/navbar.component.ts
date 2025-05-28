import { Router, RouterLink } from '@angular/router';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';
import { AuthService } from '../../../../Feature/auth/service/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [NgIf , RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() sidebarOpen = true;
  @Output() toggleSidebar = new EventEmitter<void>();
  
  constructor(
    private authService: AuthService,
    private Router: Router
  ) {}
  

  
  get currentUser(): any  {
    const user = this.authService.currentUser;
    return user
  }
  
  onToggleSidebar(): void {
    this.toggleSidebar.emit();
  }
  
  logout(event: Event): void {
    event.preventDefault();
    this.authService.logout();
  }
}
