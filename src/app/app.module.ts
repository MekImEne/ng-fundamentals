import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    NoopAnimationsModule
  ],
  declarations: [
    EventsAppComponent
  ],
  //providers: [], //services
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
