import { Component, Input } from '@angular/core';
import { EventService, ISession } from '../events';
import {AuthService} from '../user/auth.service';
import {Ievent} from '../events/shared/event.model';
@Component({
  selector: 'app-nav-bar',
  templateUrl : `./navbar.components.html`,
  styles : [`
    .nav.navbar-nav {font-size : 15px;}
    #searchForm {margin-right: 100px;}
    @media (max-width : 1200px) {#searchForm {display: none}}
    li > a.active { color: #F97924; }
  `]
})

export class NavBarComponent {
  searchTerm = '';
  foundSession: ISession[];
  events: Ievent[];
  constructor(
    public auth: AuthService,
    private eventService: EventService,
  ) {}

  // tslint:disable-next-line:typedef
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.eventService.getEvents().subscribe((data) => {
      this.events = data;
   });
  }

  // tslint:disable-next-line:typedef
  searchSessions(searchTerm){
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSession = sessions;
      /* console.log(this.foundSession); */
    });
  }
}
