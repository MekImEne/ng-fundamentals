import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.components';
import { EventsThumbnailComponent } from './events/events-thumbnail.components';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav/navbar.components';
import { EventService } from './events/shared/event.service';
// import { ToastrService } from './common/toastr.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { EventDetailsComponent } from './events/event-details/event-details.component';

@NgModule({
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
  ],
  // services
  providers: [
    EventService,
    // ToastrService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
