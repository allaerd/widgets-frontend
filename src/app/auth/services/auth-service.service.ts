import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Variables
  authUrl = 'http://localhost:8000/oauth/token';
  apiUrl = 'http://localhost:8000/api';
  isLoggedIn = false;
  /**
   * Constructor
   * @param http The http client object
   */
  constructor(private http: HttpClient) {}

  login(e: string, p: string): Observable<any> {
    return this.http.post(this.authUrl, {
      grant_type: 'password',
      client_id: '2',
      client_secret: 'nokdb426a5w81SAb3uAwyfP8yhi2uMfNbVvxnKJu',
      username: e,
      password: p,
      scope: '*',
    });
  }

  handleLogin(data: any): void {
    localStorage.setItem('token', data.access_token);
    this.isLoggedIn = true;
  }

  logout(): Observable<any> {
    localStorage.removeItem('token');
    this.isLoggedIn = false;
    return this.http.get(this.apiUrl + '/token/revoke');
  }
}
