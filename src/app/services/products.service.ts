import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'https://dummyjson.com/products?limit=33';

 
  products = [
    { id: 1,  title: 'Coffee Maker',  price: 500, image: 'assets/images/p1.png' },
    { id: 2,  title: 'Espresso Machine',  price: 200, image: 'assets/images/p2.png' },
    { id: 3,  title: 'Coffee Brewer',  price: 999,  image: 'assets/images/p3.png' },
    { id: 4,  title: 'Coffee Capsules',  price: 100, image: 'assets/images/p4.png' },
    { id: 5,  title: 'Coffee Beans',  price: 80, image: 'assets/images/p5.png' },
    { id: 6,  title: 'Gooseneck Kettle',  price: 150, image: 'assets/images/p6.png' },
    { id: 7,  title: 'Mug Tea',  price: 60, image: 'assets/images/p7.png' },
    { id: 8,  title: 'Cezve',  price: 190,  image: 'assets/images/p8.png' },
    { id: 9,  title: 'Turkish Demitasse Cup',  price: 70, image: 'assets/images/p9.png' },
    { id: 10, title: 'Chocolate Mug', price: 90, image: 'assets/images/p10.png' },
    { id: 11, title: 'Mug Coffee ', price: 50, image: 'assets/images/p11.png' },
    { id: 12, title: 'Demitasse Cup', price: 110, image: 'assets/images/p12.png' },
    { id: 13, title: 'Cinnamon Cup', price: 130, image: 'assets/images/p13.png' },
    { id: 14, title: 'Chocolate Spread Jar', price: 150, image: 'assets/images/p14.png' },
    { id: 15, title: 'Chocolate Milk', price: 175, image: 'assets/images/p15.png' },
    { id: 16, title: 'Coffee Caramel Sauce', price: 155, image: 'assets/images/p16.png' },
    { id: 17, title: ' Strawberry Sauce', price: 220, image: 'assets/images/p17.png' },
    { id: 18, title: 'Instant Coffee Premium', price: 125, image: 'assets/images/p18.png' },
    { id: 19, title: 'Orange Smoothie Bottle', price: 30, image: 'assets/images/p19.png' },
    { id: 20, title: 'Mixed Grains Jar', price: 145, image: 'assets/images/p20.png' },
    { id: 21, title: 'Orange Preserves Jar', price: 230, image: 'assets/images/p21.png' },
    { id: 22, title: 'Reusable Tumbler Bottles', price:55, image: 'assets/images/p22.png' },
    { id: 23, title: 'Mason Jar with Straw', price: 44, image: 'assets/images/p23.png' },
    { id: 24, title: 'Glass Swing-Top Bottle', price: 33, image: 'assets/images/p24.png' },
    { id: 25, title: 'Travel Mug', price: 190, image: 'assets/images/p25.png' },
    { id: 26, title: 'Thermos Jug', price: 175, image: 'assets/images/p26.png' },
    { id: 27, title: 'Thermos', price: 210, image: 'assets/images/p27.png' },
    { id: 28, title: 'Star Anise', price: 20, image: 'assets/images/p28.png' },
    { id: 29, title: 'Cinnamon Sticks', price: 25, image: 'assets/images/p29.png' },
    { id: 30, title: 'Almonds', price: 25, image: 'assets/images/p30.png' },
    { id: 31, title: 'Hazelnuts', price: 30, image: 'assets/images/p31.png' },
    { id: 32, title: 'Walnuts', price: 35, image: 'assets/images/p32.png' },
    { id: 33, title: 'Pistachios', price: 30, image: 'assets/images/p33.png' }
  ];

  constructor(private http: HttpClient) {}

  getProducts() {
    
    return this.http.get<any>(this.apiUrl).pipe(
      map(() => {
      
        return this.products;
      })
    );
  }
}
