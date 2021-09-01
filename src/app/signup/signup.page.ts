import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from './signup.service';
import { user } from './user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  emailSignupForm = true;
  phoneSignupForm = false;
  addBoxVal: user[] = [];
  public addBox: user =  {
    name: '',
    email: 'Not Entered',
    phone: '',
    pass: '',
   };
   public name: "string";
   public email: "any";
   public phone: '';
   public pass: "any";
public storageseaayaHU;
  
  constructor(private listService: SignupService, private router: Router ) { }

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



  storage(){
console.log(this.name)
    // this.addBox.name = namel;
    // localStorage.setItem("email", "email@example.com");

  }
fetch(){
  // this.storageseaayaHU = localStorage.getItem("name");
  this.storageseaayaHU = localStorage.getItem("session");
  console.log(this.storageseaayaHU);
}

  addCar() {
    this.addBox = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      pass: this.pass,
    }
    // console.log("value add hogi syd");
    this.listService.store(this.addBox).subscribe(
      (res: user) => {
        // Update the list of cars
        this.addBoxVal.push(res)},);
        localStorage.setItem("name", this.name);
        localStorage.setItem("pass", this.pass);
        localStorage.setItem("email", this.email);
        localStorage.setItem("phone", this.phone);
        localStorage.setItem("session", "start");
        this.router.navigate(['/game-list']);
  }

  

}
