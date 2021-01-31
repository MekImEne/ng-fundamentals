import { Component , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  template : `
    <div class="well hoverwell thumbnail">
      <h2> {{event.name}} </h2>
      <div>Date : {{event.date}} </div>
      <div>Time : {{event.time}} </div>
      <div>Price : \${{event.price}} </div>
      <div>
        <span>Location : {{event.location.address}} </span>
        <span>&nbsp;</span>
        <span>{{event.location.city}} , {{event.location.country}} </span>
      </div>
      <!-- <button class="btn btn-primary" (click) = "handleClickMe()" >Click me!</button> -->
    </div>
  `
})

export class EventsThumbnailComponent {
  @Input() event: any; // Child pass event variable to other components
  /* @Output() eventClick = new EventEmitter();

  handleClickMe() {
    console.log('Clicked !');
    this.eventClick.emit(this.event.name);
  } */

  someProperty: any = 'test template variable to interact with child component';

  logFoo() {
    console.log('foo');
  }
}
