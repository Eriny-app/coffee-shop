import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isSearchOpen = false;
  isMenuOpen = false;
  searchText = '';

  toggleSearchPopup() {
    this.isSearchOpen = !this.isSearchOpen;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  onSearch() {
  
    console.log('search for', this.searchText);
    this.toggleSearchPopup();
  }
}
