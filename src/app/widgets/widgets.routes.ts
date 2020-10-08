import { Routes } from '@angular/router';
import { WidgetDetailComponent } from './widget-detail/widget-detail.component';
import { WidgetListComponent } from './widget-list/widget-list.component';

export const WidgetsRoutes: Routes = [
  {path: 'widgets', component: WidgetListComponent},
  {path: 'widgets/create', component: WidgetDetailComponent},
  {path: 'widgets/edit/:id', component: WidgetDetailComponent},
];
