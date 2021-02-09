import { Error404Component } from './app/errors/404.components';
import {Routes} from '@angular/router';

import {
  EventRouteActivator,
  CreateEventComponent,
  EventDetailsComponent,
  EventsListComponent,
  EventsListResolver,
  CreateSessionComponent
} from './app/events/index';

export const appRoutes: Routes = [
  {path : 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  {path : 'events' , component : EventsListComponent, resolve: {events: EventsListResolver}},
  {path : 'events/:id', component : EventDetailsComponent , canActivate: [EventRouteActivator]},
  {path : 'events/session/new' , component: CreateSessionComponent},
  {path : '404', component: Error404Component},
  {path : '' , redirectTo : '/events' , pathMatch : 'full'},
  {
    path: 'user' ,
    loadChildren: () => import('./app/user/user.module').then(m => m.UserModule),
  },
];
