import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  emailSignupForm = true;
  phoneSignupForm = false;
  constructor() { }

  ngOnInit() {
  }
  phoneSignup(){
    this.phoneSignupForm = true;
    this.emailSignupForm = false;
  }
  emailSignup(){
    this.emailSignupForm = true;
    this.phoneSignupForm = false;
  }
}
