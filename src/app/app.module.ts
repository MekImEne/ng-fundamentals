import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { ToastrModule } from 'ngx-toastr';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.components';
import { EventsThumbnailComponent } from './events/events-thumbnail.components';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav/navbar.components';
import { EventService } from './events/shared/event.service';

@NgModule({
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    // BrowserAnimationsModule,
    // ToastrModule.forRoot(), // ToastrModule added
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavBarComponent,
  ],
  // services
  providers: [EventService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
