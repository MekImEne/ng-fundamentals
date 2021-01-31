import { Component } from '@angular/core';

@Component({
  selector: 'app-events-list',
  template : `
    <div>
      <h1> Upcoming Angular Events </h1>
      <hr/>
      <app-event-thumbnail [event]="event1"></app-event-thumbnail>
    </div>
  `
})

export class EventsListComponent {
  event1 = {
    id: 1,
    name : 'Angular connect',
    date : '02/03/2021',
    time : '10:00 am',
    price : 599.99,
    imageUrl : '/assets/images/angularconnect-shield.png',
    location : {
      address : '1057 DT',
      city : 'London',
      country : 'England',
    }
  };
}
