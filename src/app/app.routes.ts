import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login';
import { RegisterComponent } from './pages/register/register';
import { Home } from './pages/home/home';
import { CartComponent } from './pages/cart/cart';
import { ShopComponent } from './pages/shop/shop';  
import { Menu } from './pages/menu/menu';

import { authGuard } from './guards/auth-guard';

export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: Home },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cart', component: CartComponent},
  { path: 'menu', component: Menu },

  { 
    path: 'shop', 
    component: ShopComponent,
    canActivate: [authGuard]
  },

  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
