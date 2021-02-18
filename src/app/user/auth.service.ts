import { Injectable } from '@angular/core';
import {IUser} from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthService {
    currentUser: IUser;

    constructor(private http: HttpClient){}

    // tslint:disable-next-line:typedef
    loginUser(userName: string, password: string) {
        const loginInfos = {username: userName, password};
        const options = {headers: new HttpHeaders({'Content-type': 'application/json'})};
        return this.http.post('/api/login', loginInfos, options)
            .pipe(tap(data => {
                this.currentUser = (data[`user`] as IUser);
            }))
            .pipe(catchError(err => {
                return of(false);
            }));
    }

    // tslint:disable-next-line:typedef
    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
        const options = {headers: new HttpHeaders({'Content-type': 'application/json'})};
        return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options);
    }

    isAuthenticated = () => {
        return !!this.currentUser;
    }

    checkAuthenticationStatus = () => {
        this.http.get('/api/currentIdentity')
        .pipe(tap(data => {
            if (data instanceof Object) {
                this.currentUser = (data as IUser);
            }
        }))
      .subscribe();
    }

    // tslint:disable-next-line:typedef
    logout() {
        this.currentUser = undefined;
        const options = {headers: new HttpHeaders({'Content-type': 'application/json'})};
        return this.http.post('/api/logout', {}, options);
    }
}
