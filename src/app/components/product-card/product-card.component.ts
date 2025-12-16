import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from '../../services/cart';   

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input() product: any;
  @Output() add = new EventEmitter();  

  qty = 1;

  constructor(private cartService: CartService) {}  

  inc() { 
    this.qty++; 
  }

  dec() { 
    if (this.qty > 1) this.qty--; 
  }

  addToCart() {

  
    this.cartService.addToCart({
      id: this.product.id,
      title: this.product.title,
      price: this.product.price,
      image: this.product.image,
      quantity: this.qty
    });

   
    this.add.emit({ product: this.product, qty: this.qty });
  }
}
