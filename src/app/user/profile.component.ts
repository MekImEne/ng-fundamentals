import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(){
    this.profileForm = new FormGroup({
      firstName : new FormControl(this.authService.currentUser.firstName),
      lastName : new FormControl(this.authService.currentUser.lastName),
    });
  }

  saveProfile(formValues){
    console.log(formValues);
    this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
    this.router.navigate(['events']);
  }

  cancel(){
    this.router.navigate(['events']);
  }
}
