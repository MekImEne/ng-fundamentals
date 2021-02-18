import { Component } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'app-events',
  template: `
    <app-nav-bar></app-nav-bar>
    <!-- <app-events-list></app-events-list> -->
    <router-outlet></router-outlet>
  `,
  // styleUrls: ['./app.component.css']
})
export class EventsAppComponent {
  /* title = 'ng-fundamentals'; */
  constructor(private auth: AuthService) {}

  // tslint:disable-next-line:typedef
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.auth.checkAuthenticationStatus();
  }
}
