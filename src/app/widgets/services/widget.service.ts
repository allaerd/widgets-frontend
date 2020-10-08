import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

import Widget from '../models/widget.model';
import {Constants} from '../../core/config/constants';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class WidgetService {
    selectedWidget: Widget;
    widgets = new Subject<Widget[]>();

    constructor(private http: HttpClient, private constats: Constants) {
    }

    get() {
        return this.http.get<any>(this.constats.API_ENDPOINT + '/widgets')
            .pipe(
                map((data: any) => data.data)
            )
            .subscribe(data => this.widgets.next(data));
    }

    create(data: any): Observable<any> {
        const postData = JSON.stringify(data);
        return this.http.post(this.constats.API_ENDPOINT + '/widgets', postData);
    }

    update(id: number, data: any): Observable<any> {
        const postData = JSON.stringify(data);
        return this.http.put(this.constats.API_ENDPOINT + '/widgets/' + id , postData);
    }

    delete(id: number): Observable<any> {
        return this.http.delete(`${this.constats.API_ENDPOINT}/widgets/${id}`);
    }
}
