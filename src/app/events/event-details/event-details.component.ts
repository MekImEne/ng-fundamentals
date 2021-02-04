import { Component , OnInit} from '@angular/core';
import {EventService} from '../shared/event.service';
import {ActivatedRoute} from '@angular/router';
import {Ievent} from '../shared/event.model';

@Component({
  /* selector: 'app-event-details', */
  templateUrl: `./event-details.component.html`,
  styles: [`
    .container {padding-left: 20px; padding-right: 20px;}
    .event-image { height: 100px;}
  `],
})

export class EventDetailsComponent implements OnInit {
  event: Ievent;
  constructor(private eventService: EventService, private route: ActivatedRoute){}
  ngOnInit = (): void => {
    this.event = this.eventService.getEvent(+this.route.snapshot.params[`id`]);
  }
}
