import {AuthActions, AuthActionTypes} from './auth.actions';

export interface AuthState {
    isLoggedIn: boolean;
    token: string;
    errorMsg: string;
    loading: boolean;
}

const initialState: AuthState = {
    isLoggedIn: false,
    loading: false,
    token: '',
    errorMsg: '',
};

export function authReducer(state = initialState, action: AuthActions): AuthState {
    switch (action.type) {
        case AuthActionTypes.AUTH_LOGIN_START:
            return {
                ...state,
                loading: true,
                errorMsg: ''
            };
        case AuthActionTypes.AUTH_LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload.access_token,
                isLoggedIn: true,
                loading: false,
                errorMsg: ''
            };
        case AuthActionTypes.AUTH_LOGIN_ERROR:
            return {
                ...state,
                isLoggedIn: false,
                loading: false,
                errorMsg: 'Er is een fout opgetreden'
            };
        case AuthActionTypes.AUTH_LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                loading: false,
                errorMsg: ''
            };
        default:
            return state;
    }
}
