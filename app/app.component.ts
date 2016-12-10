import { Component } from '@angular/core';

@Component({
    moduleId:module.id,
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <nav>
    <a routerLink="/heroes" routerLinkActive="active">HEROES</a>
    <a routerLink="/dashboard" routerLinkActive="active">DashBoard</a>
    <router-outlet></router-outlet>
    </nav>
  `,
    styleUrls:['app.component.css'],
})
export class AppComponent {
    title = 'Tour of Heroes';
}
