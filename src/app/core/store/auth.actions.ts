import {Action} from '@ngrx/store';
import {AuthLoginCredentials} from '../../auth/models/auth.login.credentials';
import {AuthLoginResponse} from '../../auth/models/auth.login.response';
import {Actions} from '@ngrx/effects';

export const enum AuthActionTypes {
    AUTH_LOGIN = '[Login] Login',
    AUTH_LOGOUT = '[Login] Logout',
    AUTH_LOGIN_START = '[Login] Login start',
    AUTH_LOGIN_SUCCESS = '[Login] Login success',
    AUTH_LOGIN_ERROR = '[Login] Login error',
}

export class AuthLogin implements Action {
    readonly type = AuthActionTypes.AUTH_LOGIN;

    constructor(public payload: AuthLoginCredentials) {
    }
}

export class AuthLoginStart implements Action {
    readonly type = AuthActionTypes.AUTH_LOGIN_START;
}

export class AuthLoginSuccess implements Action {
    readonly type = AuthActionTypes.AUTH_LOGIN_SUCCESS;

    constructor(public payload: AuthLoginResponse) {
    }
}

export class AuthLoginError implements Action {
    readonly type = AuthActionTypes.AUTH_LOGIN_ERROR;

    constructor(public payload: { error }) {
    }
}

export class AuthLogout implements Action {
    readonly type = AuthActionTypes.AUTH_LOGOUT;
}

export type AuthActions = AuthLogin | AuthLoginSuccess | AuthLogout | AuthLoginError | AuthLoginStart;