import { EventRouteActivator } from './app/events/event-details/event-route-activator.service';
import { Error404Component } from './app/errors/404.components';
import {Routes} from '@angular/router';
import { CreateEventComponent } from './app/events/create-event.component';

import { EventDetailsComponent } from './app/events/event-details/event-details.component';
import { EventsListComponent } from './app/events/events-list.components';
import { EventsListResolver } from './app/events/events-list-resolver.server';

export const appRoutes: Routes = [
  {path : 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  {path : 'events' , component : EventsListComponent, resolve: {events: EventsListResolver}},
  {path : 'events/:id', component : EventDetailsComponent , canActivate: [EventRouteActivator]},
  {path : '404', component: Error404Component},
  {path : '' , redirectTo : '/events' , pathMatch : 'full'},
  {
    path: 'user' ,
    loadChildren: () => import('./app/user/user.module').then(m => m.UserModule),
  },
];
