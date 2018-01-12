import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<a [routerLink]="TenentApp" routerLinkActive="active">TenentApp</a>
  <a [routerLink]="Login" routerLinkActive="active">Login</a>

  <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
}
