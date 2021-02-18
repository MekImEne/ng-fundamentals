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
import {HttpClientModule} from '@angular/common/http';

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
  // EventRouteActivator,
  EventService,
  EventsListResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
  UpvoteComponent,
  VoterService,
  LocationValidator,
  EventResolver
} from './events/index';
import { AuthService } from './user/auth.service';

const toastr: Toastr = window['toastr'];
const jQuery = window['$'];
@NgModule({
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added

    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
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
    UpvoteComponent,
    LocationValidator
  ],
  // services
  providers: [
    EventService,
    // { provide : EventRouteActivator, useClass: EventRouteActivator },
    // { provide : EventRouteActivator, useClass: EventRouteActivator },
    // ToastrService,
    EventResolver,
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

// tslint:disable-next-line:typedef
export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not save this event ! Do you really want to cancel ?');
  }
  return true;
}
/* tslint:enable:no-string-literal */
