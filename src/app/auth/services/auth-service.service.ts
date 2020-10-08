import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Constants} from '../../core/config/constants';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    isLoggedIn = false;

    /**
     * Constructor
     * @param http The http client object
     */
    constructor(private http: HttpClient, private constants: Constants) {
    }

    login(e: string, p: string): Observable<any> {
        return this.http.post(this.constants.AUTH_ENDPOINT, {
            grant_type: 'password',
            client_id: this.constants.CLIENT_ID,
            client_secret: this.constants.CLIENT_SECRET,
            username: e,
            password: p,
            scope: '*',
        });
    }

    isUserLoggedIn(): void {
        if (localStorage.getItem('token')) {
            this.isLoggedIn = true;
        }
    }

    handleLogin(data: any): void {
        localStorage.setItem('token', data.access_token);
        this.isLoggedIn = true;
    }

    logout(): Observable<any> {
        localStorage.removeItem('token');
        this.isLoggedIn = false;
        return this.http.get(this.constants.API_ENDPOINT + '/token/revoke');
    }
}
