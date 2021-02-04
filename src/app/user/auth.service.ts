import { Injectable } from '@angular/core';
import {IUser} from './user.model';
@Injectable()
export class AuthService {
    currentUser: IUser;

    loginUser (username: string, password: string){
        this.currentUser = {
            id: 1,
            firstName: 'Imane',
            lastName: 'MEKIDECHE',
            userName: username,
        };
    }

    updateCurrentUser(firstName: string, lastName: string){
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }

    isAuthenticated() {
        return !!this.currentUser;
    }
}
