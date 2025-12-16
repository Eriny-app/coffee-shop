import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart';
import { AuthService } from '../../services/auth.service'; 

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  isMenuOpen = false;
  isSearchOpen = false;
  searchText = '';

  cartCount = 0;

  constructor(
    private router: Router,
    private cartService: CartService,
    private auth: AuthService 
  ) {

   
    this.cartService.cart$.subscribe(items => {
      this.cartCount = items.reduce((total, item) => total + item.quantity, 0);
    });
  }

 
  isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  }

 
  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  toggleSearchPopup() {
    this.isSearchOpen = !this.isSearchOpen;
  }

  onSearch() {
    console.log('Searching for:', this.searchText);
    this.isSearchOpen = false;
  }

  isHomePage(): boolean {
    return this.router.url === '/home' || this.router.url === '/';
  }

  scrollTo(sectionId: string) {
    if (this.isHomePage()) {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      this.router.navigate(['/home']).then(() => {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          element?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 300);
      });
    }
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth > 992 && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }
}
