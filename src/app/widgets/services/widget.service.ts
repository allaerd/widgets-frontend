import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Widget from '../models/widget.model';

@Injectable({
  providedIn: 'root',
})
export class WidgetService {
  apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  get(): Observable<Widget[]> {
    return this.http.get<Widget[]>(this.apiUrl + '/widgets');
  }

  create(data: any): Observable<any> {
    const postData = JSON.stringify(data);
    return this.http.post(this.apiUrl + '/widgets/create', postData);
  }

  update(data: any): Observable<any> {
    const postData = JSON.stringify(data);
    return this.http.put(this.apiUrl + '/widgets/create', postData);
  }

  delete(id: number): Observable<any> {
    return this.http.delete( `${this.apiUrl}/widgets/${id}`);
  }
}
