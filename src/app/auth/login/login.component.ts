import {Component, OnInit} from '@angular/core';
import {AuthService} from 'src/app/auth/services/auth-service.service';
import {Store} from '@ngrx/store';
import * as authAction from '../store/auth.actions';
import {AuthState} from '../store/auth.reducer';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    email: string;
    password: string;
    auth$: Observable<AuthState>;

    constructor(private store: Store<any>) {
    }

    ngOnInit(): void {
        this.auth$ = this.store.select('auth');
    }

    login(): void {
        this.store.dispatch(new authAction.AuthLoginStart());
        this.store.dispatch(new authAction.AuthLogin({email: this.email, password: this.password}));
    }

    logout(): void {
        this.store.dispatch(new authAction.AuthLogout());
    }

}
