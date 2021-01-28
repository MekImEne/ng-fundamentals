import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
    <h2>Hello world !</h2>
    <img src="/assets/images/basic-shield.png" alt="image" />
  `,
  //styleUrls: ['./app.component.css']
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}
