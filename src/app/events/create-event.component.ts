import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { EventService } from './shared';

@Component({
  templateUrl: 'create-event.component.html',
  styles: [`
    em {float: right; color: #E05C65; padding-left: 10px;}
    .error input {background-color: #E3C3C5;}
    .error ::-webkit-input-placeholder {color: #999;}
    .error ::-moz-placeholder {color: #999;}
    .error :-moz-placeholder {color: #999;}
    .error :ms-input-placeholder {color: #999;}
  `],
})

export class CreateEventComponent  {
  event: any;
  isDirty = true;
  constructor(private router: Router, private eventService: EventService){}

  ngOnInit () {
    this.event = {
      name : 'Ng Spectacular',
      date : '03/02/2022',
      time : '10 am',
      price : 799.88,
      location : {
        address : '300 log DNC',
        city : 'Alger',
        country : 'Algeria',
      },
      onlineUrl : 'http://ngSpectacular.com',
      imageUrl : 'http://ngSpectacular.com/logo.png'
    };
  }

  saveEvent = (formValues) => {
    console.log(formValues);
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }
  cancel = (): void => {
    this.router.navigate(['/events']);
  }
}
