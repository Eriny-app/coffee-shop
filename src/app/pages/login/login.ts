import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',   
  styleUrls: ['./login.css'],
  imports: [CommonModule, FormsModule, RouterModule]
})
export class LoginComponent {

  username = '';
  password = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  async onLogin() {
    const success = await this.auth.login(this.username, this.password);

    if (success) {
      this.router.navigate(['/shop']);
    } else {
      alert('Invalid Username or Password');
    }
  }
}
