import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../../auth/services/auth-service.service';
import {Store} from '@ngrx/store';
import {AppState} from '../store/reducers';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router,
        private store: Store<AppState>
    ) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        let loggedIn = false;

        this.store.select('authState').pipe(map( data => data.isLoggedIn)).subscribe(
            data => loggedIn = data
        );

        if (loggedIn) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
