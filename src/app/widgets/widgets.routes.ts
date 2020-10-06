import { Routes } from '@angular/router';
import { CreateWidgetComponent } from './create-widget/create-widget.component';
import { WidgetListComponent } from './widget-list/widget-list.component';

export const WidgetsRoutes: Routes = [
  {path: 'widgets', component: WidgetListComponent},
  {path: 'widgets/detail', component: CreateWidgetComponent},
  {path: 'widgets/detail/:id', component: CreateWidgetComponent},
];
