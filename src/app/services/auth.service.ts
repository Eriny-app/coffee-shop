import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {


  private API_URL = 'https://dummyjson.com/auth/login';

  private tokenKey = 'token';

  isUserLoggedIn = new EventEmitter<boolean>();

  constructor(private http: HttpClient) {}

  async login(username: string, password: string): Promise<boolean> {
    try {

      const response: any = await firstValueFrom(
        this.http.post(
          this.API_URL,
          { username, password },
          {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          }
        )
      );

      console.log("API Response:", response);

    
      localStorage.setItem(this.tokenKey, response.token);

   
      this.isUserLoggedIn.emit(true);

      return true;

    } catch (err) {
      console.error("Login error:", err);
      return false;
    }
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.isUserLoggedIn.emit(false);
  }
}
