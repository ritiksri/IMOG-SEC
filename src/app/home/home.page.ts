
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  backButtonSubscription; 
  public showLogo = false;
  public showCompany = false;
  public showContent = false;
  public sessioncheck = {
    session: '',
    name: '',
    pass: '',
    email: '',
    phone: '',
  }
  // for storing the returned subscription

  constructor (private platform: Platform, private router: Router) { }

  ngOnInit() {
    this.openingPage();
   }
  // ngAfterViewInit() {
  //   this.backButtonSubscription = this.platform.backButton.subscribe(() => {
  //     navigator['app'].exitApp();
  //   });
  // }

  // ngOnDestroy() {
  //   this.backButtonSubscription.unsubscribe();
  // }

openingPage(): void{
  this.sessioncheck.session = localStorage.getItem("session");
  console.log(this.sessioncheck);
  this.sessioncheck.name = localStorage.getItem("name");
  console.log(this.sessioncheck.name);
  this.sessioncheck.email = localStorage.getItem("email");
  console.log(this.sessioncheck.email);
  this.sessioncheck.phone = localStorage.getItem("phone");
  console.log(this.sessioncheck.phone);
  this.showCompany = true;
  setTimeout(()=>{
  this.showCompany = false;
  this.showLogo = true;
  }, 2000);
  setTimeout(()=>{
    this.showCompany = false;
    this.showLogo = false;
    if (this.sessioncheck.session == "start") {
      this.router.navigate(['/game-list']);
    } else {
      this.showContent = true
    }
    }, 6000);
   
    
}


}
