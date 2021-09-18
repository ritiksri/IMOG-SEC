import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-ludo-mode-listing',
  templateUrl: './ludo-mode-listing.page.html',
  styleUrls: ['./ludo-mode-listing.page.scss'],
})
export class LudoModeListingPage implements OnInit, OnDestroy  {

  public showTicTacToe = true;
  public showContent = false;
  constructor() { }

  
  ngOnInit() {
    this.openingPage();
  }
  openingPage(): void{
    
    setTimeout(()=>{
      this.showTicTacToe = false;
      this.showContent = true;
      }, 5000);

  }
  ngOnDestroy(){
    this.showTicTacToe = true;
    this.showContent = false;
  }


}
