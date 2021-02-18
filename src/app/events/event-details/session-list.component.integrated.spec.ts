import {TestBed, waitForAsync, ComponentFixture} from '@angular/core/testing';
import {DebugElement, Component, NO_ERRORS_SCHEMA} from '@angular/core';
import {SessionListComponent} from './session-list.component';
// import { UpvoteComponent } from './upvote.component';

import {VoterService} from './voter.service';
import {AuthService} from '../../user/auth.service';
import {ISession} from '../shared/event.model';
import {By} from '@angular/platform-browser';
import { DurationPipe } from '../shared';
import { CollapsibleWellComponent } from 'src/app/common';

@Component({})
class UpvoteComponent {

}

describe('SessionListComponent', () => {
    let fixture: ComponentFixture<SessionListComponent>;
    let component: SessionListComponent;
    let element: HTMLElement;
    let debugEl: DebugElement;

    beforeEach(waitForAsync(() => {
        const mockAuthService = {
            isAuthenticated: () => true,
            currentUser: {userName: 'Joe'}
        };
        const mockVoterService = {
            userHasVoted: () => true
        };

        TestBed.configureTestingModule({
            imports: [],
            declarations: [
                SessionListComponent,
                // UpvoteComponent,
                DurationPipe,
                // CollapsibleWellComponent
            ],
            providers: [
                {provide: AuthService, useValue: mockAuthService},
                {provide: VoterService, useValue: mockVoterService},
            ],
            schemas: [
                NO_ERRORS_SCHEMA
            ],
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SessionListComponent);
        component = fixture.componentInstance;
        debugEl = fixture.debugElement;
        element = fixture.nativeElement;
    });

    describe('Initial display', () => {
        it('Should have the correct initial display', () => {
            component.sessions = [{
                id: 3,
                name: 'Session 1',
                presenter: 'Joe',
                duration: 1,
                level: 'beginner',
                abstract: 'abstarct',
                voters: ['john', 'bob']
            }];
            component.filterBy = 'all';
            component.sortBy = 'name';
            component.eventId = 4;

            component.ngOnChanges();
            fixture.detectChanges();

            // expect(element.querySelector('[well-title]').textContent).toContain('Session 1');
            expect(debugEl.query(By.css('[well-title]')).nativeElement.textContent).toContain('Session 1');
        });
    });
});
