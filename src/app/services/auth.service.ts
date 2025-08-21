import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

// Define a User model for the frontend
export interface User {
  id: string;
  name: string;
  email: string;
}

// Define the response shape for login/signup
export interface AuthResponse {
  token: string;
  user: User;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/auth';
  // BehaviorSubject holds the current user object or null
  user = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient, private router: Router) {}

  signup(userData: any): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/signup`, userData).pipe(
      tap(response => this.handleAuthentication(response))
    );
  }

  login(credentials: any): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, credentials).pipe(
      tap(response => this.handleAuthentication(response))
    );
  }

  logout(): void {
    // Clear user from BehaviorSubject
    this.user.next(null);
    // Remove from localStorage
    localStorage.removeItem('userData');
    // Redirect to login page
    this.router.navigate(['/login']);
  }

  autoLogin(): void {
    const userDataString = localStorage.getItem('userData');
    if (!userDataString) {
      return;
    }

    const userData: { user: User, token: string } = JSON.parse(userDataString);
    if (userData && userData.token) {
      // Here you could add token expiration check
      // For now, we'll just assume the token is valid if it exists
      this.user.next(userData.user);
    }
  }

  private handleAuthentication(response: AuthResponse): void {
    if (response && response.token && response.user) {
      // Set user in BehaviorSubject
      this.user.next(response.user);
      // Store user data and token in localStorage
      localStorage.setItem('userData', JSON.stringify({ user: response.user, token: response.token }));
    }
  }
}
