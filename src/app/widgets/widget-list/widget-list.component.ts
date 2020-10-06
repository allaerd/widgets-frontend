import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Widget from '../models/widget.model';
import { WidgetService } from '../services/widget.service';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  widgets$: Observable<Widget[]>;
  constructor(private widgetsService: WidgetService) { }

  ngOnInit(): void {
    this.loadWidgets();
  }

  loadWidgets(): void {
    this.widgets$ = this.widgetsService.get();
  }

  delete(id: number): void {
    this.widgetsService.delete(id).subscribe (
      data =>   this.loadWidgets());
  }
}
