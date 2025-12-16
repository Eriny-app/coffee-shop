import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: CartItem[] = [];
  private cartSource = new BehaviorSubject<CartItem[]>([]);
  cart$ = this.cartSource.asObservable();

 
  private cartCountSource = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSource.asObservable();

  constructor() {}

  addToCart(item: CartItem) {
    const exist = this.cartItems.find(p => p.id === item.id);

    if (exist) {
      exist.quantity += item.quantity;
    } else {
      this.cartItems.push(item);
    }

    this.cartSource.next([...this.cartItems]);
    this.updateCartCount(); 
  }

  increaseQuantity(id: number) {
    const item = this.cartItems.find(i => i.id === id);
    if (item) {
      item.quantity++;
      this.cartSource.next([...this.cartItems]);
      this.updateCartCount(); 
    }
  }

  decreaseQuantity(id: number) {
    const item = this.cartItems.find(i => i.id === id);
    if (item && item.quantity > 1) {
      item.quantity--;
      this.cartSource.next([...this.cartItems]);
      this.updateCartCount(); 
    }
  }

  removeItem(id: number) {
    this.cartItems = this.cartItems.filter(i => i.id !== id);
    this.cartSource.next([...this.cartItems]);
    this.updateCartCount(); 
  }


  private updateCartCount() {
    const total = this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
    this.cartCountSource.next(total);
  }
}
