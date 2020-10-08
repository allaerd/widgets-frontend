import {Routes} from '@angular/router';
import {WidgetDetailComponent} from './widget-detail/widget-detail.component';
import {WidgetListComponent} from './widget-list/widget-list.component';
import {LoggedInGuard} from '../core/guards/logged-in.guard';

export const WidgetsRoutes: Routes = [
    {path: 'widgets', component: WidgetListComponent, canActivate: [LoggedInGuard]},
    {path: 'widgets/create', component: WidgetDetailComponent, canActivate: [LoggedInGuard]},
    {path: 'widgets/edit/:id', component: WidgetDetailComponent, canActivate: [LoggedInGuard]},
];
