import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements  OnInit {
  email: string;
  password: string;

  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    this.auth.isUserLoggedIn();
  }

  login(): void {
    this.auth.login(this.email, this.password) ;
  }

  logout(): void {
    this.auth.logout();
  }

}
