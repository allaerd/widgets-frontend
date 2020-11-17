import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth.module';
import {HttpConfigInterceptor} from './interceptors/httpconfig.interceptor';
import {WidgetsModule} from './widgets/widgets.module';
import {HeaderComponent} from './components/header/header.component';
import {CoreModule} from './core/core.module';
import {Constants} from './core/config/constants';
import { ErrorPageComponent } from './error-page/error-page.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ErrorPageComponent
    ],
    imports: [
        BrowserModule,
        AuthModule,
        WidgetsModule,
        CoreModule,
        AppRoutingModule,
        StoreModule.forRoot({}, {})
    ],
    providers: [
        Constants,
        {provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
