import { EventService } from './../shared/event.service';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class EventRouteActivator implements CanActivate {
  constructor(private eventSerive: EventService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const eventExist = !!this.eventSerive.getEvent(+route.params['id']);
    if (!eventExist)
      this.router.navigate(['/404']);

    return eventExist;
  }
}
