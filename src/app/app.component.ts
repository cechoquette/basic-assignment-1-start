import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template:
    `<app-warning-alert></app-warning-alert>
    <app-success-alert></app-success-alert>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
