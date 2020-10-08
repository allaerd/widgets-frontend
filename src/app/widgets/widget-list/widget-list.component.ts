import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import Widget from '../models/widget.model';
import {WidgetService} from '../services/widget.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-widget-list',
    templateUrl: './widget-list.component.html',
    styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit, OnDestroy {
    widgets: Widget[];
    widgetsSubscription: Subscription;

    constructor(
        private widgetsService: WidgetService,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.widgetsSubscription = this.widgetsService.widgets.subscribe(widgets => this.widgets = widgets);
        this.loadWidgets();
    }

    ngOnDestroy(): void {
        this.widgetsSubscription.unsubscribe();
    }

    loadWidgets(): void {
        this.widgetsService.get();
    }

    delete(id: number): void {
        this.widgetsService.delete(id).subscribe(
            data => this.loadWidgets());
    }

    test(widget: Widget): void {
        this.widgetsService.selectedWidget = widget ;
        this.router.navigate(['widgets/edit/' , widget.id]);
    }
}
