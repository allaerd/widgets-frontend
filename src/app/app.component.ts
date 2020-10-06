import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor() {}

  getWidgets(): void {
    // this.auth.getWidgets().subscribe((data) => console.log(data));
  }
}
