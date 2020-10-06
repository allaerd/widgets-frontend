import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetListComponent } from './widget-list/widget-list.component';
import { RouterModule } from '@angular/router';
import { WidgetsRoutes } from './widgets.routes';
import { CreateWidgetComponent } from './create-widget/create-widget.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidInValidDirective } from '../validinvalid.directive';

@NgModule({
  declarations: [
    ValidInValidDirective,
    WidgetListComponent,
    CreateWidgetComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    [RouterModule.forChild(WidgetsRoutes)],
  ],
})
export class WidgetsModule {}
