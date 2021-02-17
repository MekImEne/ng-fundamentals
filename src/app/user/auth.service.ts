import { Injectable } from '@angular/core';
import {IUser} from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthService {
    currentUser: IUser;

    constructor(private http: HttpClient){}

    loginUser (userName: string, password: string) {
        let loginInfos = {username: userName, password: password};
        let options = {headers: new HttpHeaders({'Content-type': 'application/json'})};
        return this.http.post('/api/login', loginInfos, options)
            .pipe(tap(data => {
                this.currentUser = <IUser>data[`user`];
            }))
            .pipe(catchError(err => {
                return of(false);
            }));
    }

    updateCurrentUser = (firstName: string, lastName: string): void => {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }

    isAuthenticated = () => {
        return !!this.currentUser;
    }
}
