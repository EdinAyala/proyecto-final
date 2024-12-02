import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}

  register(email: string, password: string): void {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
  }

  login(email: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.email === email && u.password === password);
    
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.router.navigate(['/listado']);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  getCurrentUser(): any {
    return JSON.parse(localStorage.getItem('currentUser') || 'null');
  }

  isLoggedIn(): boolean {
    return this.getCurrentUser() !== null;
  }
}
