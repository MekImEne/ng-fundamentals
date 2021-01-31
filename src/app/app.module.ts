import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.components';
import { EventsThumbnailComponent } from './events/events-thumbnail.components';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav/navbar.components';

@NgModule({
  imports: [
    BrowserModule,
    NoopAnimationsModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavBarComponent
  ],
  // providers: [], //services
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
