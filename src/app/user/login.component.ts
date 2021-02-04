import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from './auth.service';

@Component({
  templateUrl: './login.component.html',
})
export class LoginComponent {
    username: string;
    password: string;

    constructor(private authService: AuthService, private router: Router) {}

    login(formValues) {
        console.log(formValues);
    }

    cancel(){
        this.router.navigate(['events']);
    }
}
