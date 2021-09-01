import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.page.html',
  styleUrls: ['./game-list.page.scss'],
})
export class GameListPage implements OnInit, OnDestroy, AfterViewInit {
  closinglistshow = true;
  closeshow = false;
  listnotshow = true;
  listshow = false;
  backButtonSubscription; 
  public sessionname;
  // for storing the returned subscription
  // exitShowPopUp = false;
  constructor (private platform: Platform, private router: Router) { }

  ngOnInit() {
    this.logicTIS();
    this.sessionname = localStorage.getItem("name");
  }
logout(){
  localStorage.setItem("session", "n");
  this.router.navigate(['/home']);
}

public clickListShow(): void{
  this.closinglistshow = false;
  this.listnotshow = false;
  this.listshow = true;
  this.closeshow = true;
}

public clickListNotShow(): void{
  this.closinglistshow = true;
  this.listnotshow = true;
  this.listshow = false;
  this.closeshow = false;
}


  ngAfterViewInit() {
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      // this.exitShowPopUp = !this.exitShowPopUp;
      navigator['app'].exitApp();
    });
  }
  // public exitpopupclose(): void{
  //   this.exitShowPopUp = !this.exitShowPopUp;
  // }
  // public exitpopupsuccess(): void{
  // navigator['app'].exitApp();
  // }
  ngOnDestroy() {
    this.backButtonSubscription.unsubscribe();
  }
  logicTIS(): void{
    let x = 120;
    let y = 22;

if (x == 10 || y == 20){
    console.log('x is equal to 10.');
}
else if (x == y)
{
    console.log('x is less than y.'); //This will be executed
}
else if (x == y) 
{
    console.log('x is equal to y');
}
  }
}
