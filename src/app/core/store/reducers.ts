import {authReducer, AuthState} from './auth.reducer';
import {ActionReducerMap} from '@ngrx/store';


export interface AppState {
    authState: AuthState;
}

export const reducers: ActionReducerMap<AppState> = {
    authState: authReducer
};
