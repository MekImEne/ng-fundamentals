/* tslint:disable:no-string-literal */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventsAppComponent } from './events-app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
// import { ToastrService } from './common/toastr.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../routes';
import { NavBarComponent } from './nav/navbar.components';
import {Error404Component} from './errors/404.components';

import {
  CollapsibleWellComponent,
  TOASTR_TOKEN,
  Toastr,
  JQ_TOKEN,
  SimpleModalComponent,
  ModalTriggerDirective
} from './common/index';

import {
  EventsListComponent,
  EventsThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventService,
  EventsListResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
  UpvoteComponent,
  VoterService
} from './events/index';
import { AuthService } from './user/auth.service';

let toastr: Toastr = window['toastr'];
let jQuery = window['$'];
@NgModule({
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added

    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent
  ],
  // services
  providers: [
    EventService,
    // { provide : EventRouteActivator, useClass: EventRouteActivator },
    { provide : EventRouteActivator, useClass: EventRouteActivator },
    // ToastrService,
    {
      provide : TOASTR_TOKEN,
      useValue: toastr
    },
    {
      provide : JQ_TOKEN,
      useValue: jQuery
    },
    AuthService,
    {
      provide : 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    EventsListResolver,
    VoterService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState (component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not save this event ! Do you really want to cancel ?');
  }
  return true;
}
/* tslint:enable:no-string-literal */
