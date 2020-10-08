import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WidgetListComponent} from './widget-list/widget-list.component';
import {RouterModule} from '@angular/router';
import {WidgetsRoutes} from './widgets.routes';
import {WidgetDetailComponent} from './widget-detail/widget-detail.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ValidInValidDirective} from '../validinvalid.directive';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
    declarations: [
        ValidInValidDirective,
        WidgetListComponent,
        WidgetDetailComponent,
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        [RouterModule.forChild(WidgetsRoutes)],
    ],
})
export class WidgetsModule {
}
