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

    isAuthenticated() {
        return !!this.currentUser;
    }
}
