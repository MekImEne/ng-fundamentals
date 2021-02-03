import { EventService } from './shared/event.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
// import { ToastrService } from '../common/toastr.service';

import {ActivatedRoute} from '@angular/router';

@Component({
  /* selector: 'app-events-list', */
  template : `
    <div>
      <h1> Upcoming Angular Events </h1>
      <hr/>

      <!-- <app-event-thumbnail
        [event]="event1"
        (eventClick)="handleEventClicked($event)"
      ></app-event-thumbnail> -->

      <!-- <app-event-thumbnail
        #thumbnail
        [event]="event1"
      ></app-event-thumbnail>
      <h4> {{thumbnail.someProperty}} </h4> -->
      <!-- <button class="btn btn-primary" (click)="thumbnail.logFoo()" >Log me some foo!</button> -->

      <!-- <div class="well">
        <div>Hello World! 👋</div>
      </div> -->

      <!-- <app-event-thumbnail
        [event]="event1"
      ></app-event-thumbnail> -->
      <div class="row">
        <div class="col-md-5" *ngFor="let event of events">
          <app-event-thumbnail
            (click) ="handleThumbnailClick(event.name)"
            [event]="event"
          ></app-event-thumbnail>
        </div>
      </div>
    </div>
  `,
  /* styles : [`
    .well div {color: #bbb;}
  `] */
})

export class EventsListComponent implements OnInit  {
  /* event1 = {
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
  }; */
  /* handleEventClicked(data){
    console.log(`recieved event's name : `, data);
  } */
  events: any;
  constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute){}

  ngOnInit(){
    this.events = this.route.snapshot.data[`events`];
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }
}
