import { Component , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  template : `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
      <h2> {{event?.name}} </h2>
      <div>Date : {{event?.date}} </div>
      <!-- <div [ngSwitch]="event?.time" [class.green]="event?.time==='8:00 am'"> -->
      <!-- <div [ngSwitch]="event?.time" [ngClass]="{green: event?.time==='8:00 am', bold : event?.time==='8:00 am' }"> -->
      <!-- <div [ngSwitch]="event?.time" [ngClass]="getStartTimeClass()"> -->
      <!-- <div
        [ngSwitch]="event?.time"
        [ngStyle]="{
          'color' : event?.time==='8:00 am' ? '#003300' : '#bbb' ,
          'font-weight' : event?.time==='8:00 am' ? 'bold' : 'normal'}"
      > -->
     <!--  <div [ngSwitch]="event?.time" [ngStyle]="getStartTimeStyle()"> -->
      <div [ngSwitch]="event?.time">
        Time : {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal start)</span>
      </div>
      <div>Price : \${{event?.price}} </div>
      <div *ngIf="event?.location">
        <span>Location : {{event?.location?.address}} </span>
        <!-- <span>&nbsp;</span> -->
        <span class="pad-left" >{{event?.location?.city}} , {{event?.location?.country}} </span>
      </div>
      <div *ngIf="event?.onlineUrl">Online URL : {{event?.onlineUrl}} </div>
      <!-- <button class="btn btn-primary" (click) = "handleClickMe()" >Click me!</button> -->
    </div>
  `,
  styles : [`
    .pad-left {margin-left : 10px;}
    .well div {color: #bbb;}
    .thumbnail {min-height : 210px;}
    /* .green {color : #003300 !important;}
    .bold {font-weight : bold;} */
  `]
})

export class EventsThumbnailComponent {
  @Input() event: any; // Child pass event variable to other components
  /* @Output() eventClick = new EventEmitter();

  handleClickMe() {
    console.log('Clicked !');
    this.eventClick.emit(this.event.name);
  } */

  /* someProperty: any = 'test template variable to interact with child component'; */

  /* logFoo() {
    console.log('foo');
  } */

  /* getStartTimeClass(){
    /* const isEarlyStart = this.event && this.event.time === '8:00 am';
    return {green : isEarlyStart, bold: isEarlyStart}; */

    // Or

    /* if (this.event && this.event.time === '8:00 am')
      return 'green bold';
    return ''; */

    // Or

    /* if (this.event && this.event.time === '8:00 am')
      return ['green', 'bold'];
    return [];
  } */

  /* getStartTimeStyle(): any {
    if (this.event && this.event.time === '8:00 am')
      return {color : '#003300', 'font-weight' : 'bold'};
    return {};
  } */
}
