import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as authAction from '../../core/store/auth.actions';
import {AuthState} from '../../core/store/auth.reducer';
import {Observable} from 'rxjs';
import {AppState} from '../../core/store/reducers';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    email: string;
    password: string;
    auth$: Observable<AuthState>;

    constructor(private store: Store<AppState>) {
    }

    ngOnInit(): void {
        this.auth$ = this.store.select('authState');
    }

    login(): void {
        this.store.dispatch(new authAction.AuthLoginStart());
        this.store.dispatch(new authAction.AuthLogin({email: this.email, password: this.password}));
    }

    logout(): void {
        this.store.dispatch(new authAction.AuthLogout());
    }

}
