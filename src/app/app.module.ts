import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {StoreModule} from '@ngrx/store';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth.module';
import {HttpConfigInterceptor} from './interceptors/httpconfig.interceptor';
import {WidgetsModule} from './widgets/widgets.module';
import {HeaderComponent} from './components/header/header.component';
import {CoreModule} from './core/core.module';
import {Constants} from './core/config/constants';
import {ErrorPageComponent} from './error-page/error-page.component';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {AuthEffects} from './core/store/auth.effects';
import {EffectsModule} from '@ngrx/effects';
import {reducers} from './core/store/reducers';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ErrorPageComponent
    ],
    imports: [
        BrowserModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([AuthEffects]),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production, // Restrict extension to log-only mode
        }),
        AuthModule,
        WidgetsModule,
        CoreModule,
        AppRoutingModule,
        StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production})
    ],
    providers: [
        Constants,
        {provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
