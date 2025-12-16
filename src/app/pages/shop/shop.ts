import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/products.service';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductCardComponent],
  templateUrl: './shop.html',
  styleUrls: ['./shop.css']
})
export class ShopComponent {

  products: any[] = [];
  filtered: any[] = [];

  searchText = '';
  activeIndex = 0;

 
  private pendingScrollId: number | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.filtered = data;
      },
      error: (err) => console.log(err)
    });
  }

  filterProducts() {
    const t = this.searchText.toLowerCase();

    this.filtered = this.products.filter(p =>
      p.title.toLowerCase().includes(t)
    );

    this.activeIndex = 0;
  }

  onKeyDown(event: KeyboardEvent) {
    if (!this.filtered.length) return;

    if (event.key === 'ArrowDown') {
      this.activeIndex = Math.min(this.activeIndex + 1, this.filtered.length - 1);
      event.preventDefault();
    }

    if (event.key === 'ArrowUp') {
      this.activeIndex = Math.max(this.activeIndex - 1, 0);
      event.preventDefault();
    }

    if (event.key === 'Enter') {
      this.goToSelected();
      event.preventDefault();
    }
  }

  goToSelected() {
    const selected = this.filtered[this.activeIndex];
    if (!selected) return;

 
    this.pendingScrollId = selected.id;

 
    this.searchText = '';
    this.filtered = this.products;
    this.activeIndex = 0;


    requestAnimationFrame(() => {
      setTimeout(() => {
        this.scrollNow();
      });
    });
  }

  private scrollNow() {
    if (!this.pendingScrollId) return;

    const el = document.getElementById('product-' + this.pendingScrollId);

    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }

  
    this.pendingScrollId = null;
  }

  addToCart(event: any) {
    console.log('Added:', event);
  }
}
