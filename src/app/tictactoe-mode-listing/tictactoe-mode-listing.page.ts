import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-tictactoe-mode-listing',
  templateUrl: './tictactoe-mode-listing.page.html',
  styleUrls: ['./tictactoe-mode-listing.page.scss'],
})
export class TictactoeModeListingPage implements OnInit, OnDestroy {

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
