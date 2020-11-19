import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {AppState} from '../../core/store/reducers';
import {AuthState} from '../../core/store/auth.reducer';
import {AuthLogout} from '../../core/store/auth.actions';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    auth$: Observable<AuthState>;

    constructor(private store: Store<AppState>) {
    }

    ngOnInit(): void {
        this.auth$ = this.store.select('authState');
    }

    logout(): void {
        this.store.dispatch(new AuthLogout());
    }

}
