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
  EventsListComponent,
  EventsThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventService,
  EventsListResolver,
  CreateSessionComponent,
  SessionListComponent
} from './events/index';
import { AuthService } from './user/auth.service';

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
    SessionListComponent
  ],
  // services
  providers: [
    EventService,
    EventRouteActivator,
    // ToastrService,
    AuthService,
    {
      provide : 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    EventsListResolver,
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
