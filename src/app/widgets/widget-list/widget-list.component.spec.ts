import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetListComponent } from './widget-list.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Constants} from '../../core/config/constants';
import {Router} from '@angular/router';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('WidgetListComponent', () => {
  let component: WidgetListComponent;
  let fixture: ComponentFixture<WidgetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetListComponent ],
      providers: [HttpClientTestingModule, HttpClient, HttpHandler, Constants, Router]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
