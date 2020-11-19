import {Injectable} from '@angular/core';
import {AuthService} from '../../auth/services/auth-service.service';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AuthActionTypes, AuthLogin, AuthLoginError, AuthLoginSuccess} from './auth.actions';
import {catchError, exhaustMap, map, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import {AuthLoginCredentials} from '../../auth/models/auth.login.credentials';

@Injectable()
export class AuthEffects {

    constructor(private actions$: Actions, private authService: AuthService) {
    }

    @Effect()
    login$ = this.actions$.pipe(
        ofType(AuthActionTypes.AUTH_LOGIN),
        map((action: AuthLogin) => action.payload),
        exhaustMap((auth: AuthLoginCredentials) =>
            this.authService.login(auth.email, auth.password)
                .pipe(
                    map(loginResponse => new AuthLoginSuccess(loginResponse)),
                    catchError(error => of(new AuthLoginError(error)))
                )
        )
    );
}
