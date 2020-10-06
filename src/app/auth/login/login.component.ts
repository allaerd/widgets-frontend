import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = 'info@allaerd.org';
  password: string = 'allaerd';

  constructor(public auth: AuthService) {}

  login(): void {
    this.auth.login(this.email, this.password).subscribe(
      (data: any) => this.auth.handleLogin(data) ,
      (err) => console.log(err),
      () => console.log('done login')
    );
  }

  logout(): void {
    this.auth.logout();
  }

}
