import { Router, RouterLink } from '@angular/router';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';
import { AuthService } from '../../../../Feature/auth/service/auth.service';
import { IconFieldModule } from 'primeng/iconfield';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  imports: [NgIf, RouterLink, IconFieldModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() sidebarOpen = true;
  @Output() toggleSidebar = new EventEmitter<boolean>();

  constructor(
    private authService: AuthService,
    private Router: Router
  ) { }



  get currentUser(): any {
    const user = this.authService.currentUser;
    return user
  }


  onToggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
    this.toggleSidebar.emit(this.sidebarOpen);
  }

  logout(event: Event): void {
    event.preventDefault();
    this.authService.logout();
  }
}
