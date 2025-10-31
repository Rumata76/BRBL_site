import { Injectable } from '@angular/core';
import {BehaviorSubject, tap} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8081/auth';
  private tokenKey ='token';
  isLoggedIn$ = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http : HttpClient, private router : Router) {}

  login(credentials: {email: string, password: string}){
    return this.http.post<{token: string}>(`${this.apiUrl}/login`, credentials)
      .pipe(
        tap(response => {
          localStorage.setItem(this.tokenKey,response.token);
          this.isLoggedIn$.next(true);
        })
      )
  }

  register(data: {email: string, paswword: string}){
    return this.http.post(`${this.apiUrl}/register`, data);

  }

  logout(){
    localStorage.removeItem(this.tokenKey);
    this.isLoggedIn$.next(false);
    this.router.navigate(['auth/login']);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  private hasToken() : boolean {
    return !!localStorage.getItem(this.tokenKey);
  }
}
