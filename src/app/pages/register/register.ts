import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
  imports: [FormsModule, CommonModule]
})
export class RegisterComponent {
  firstName = '';
  lastName = '';
  email = '';
  password = '';

  constructor(private router: Router) {}

  onRegister() {
    console.log("User Registered:", {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    });

    this.router.navigate(['/home']);
  }
}
