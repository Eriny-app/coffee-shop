import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';   
import { CartService, CartItem } from '../../services/cart';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[] = [];

  constructor(
    private cartService: CartService,
    private router: Router         
  ) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe((items: CartItem[]) => {
      this.cartItems = items;
    });
  }

  increase(item: CartItem) {
    this.cartService.increaseQuantity(item.id);
  }

  decrease(item: CartItem) {
    this.cartService.decreaseQuantity(item.id);
  }

  remove(item: CartItem) {
    this.cartService.removeItem(item.id);
  }

  getTotal() {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

 
  createRipple(event: any) {
    const button = event.target;
    const rect = button.getBoundingClientRect();

    button.style.setProperty('--x', (event.clientX - rect.left) + 'px');
    button.style.setProperty('--y', (event.clientY - rect.top) + 'px');

    button.classList.add('ripple-active');

    setTimeout(() => {
      button.classList.remove('ripple-active');
    }, 500);
  }

 
  goHome() {
    this.router.navigate(['/home']);
  }

  goShop() {
    this.router.navigate(['/shop']);
  }
}
