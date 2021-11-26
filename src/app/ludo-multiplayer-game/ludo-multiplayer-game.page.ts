import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ludo-multiplayer-game',
  templateUrl: './ludo-multiplayer-game.page.html',
  styleUrls: ['./ludo-multiplayer-game.page.scss'],
})
export class LudoMultiplayerGamePage implements OnInit {
  public showLudoRandomandFrnds = true;
  public showCODE = false;
  public showcodeedit = false;
  public showJoin = false;
  public showCreate = false;
  constructor() { }

  ngOnInit() {
  }

  playwithfriendclick():void{
    this.showCODE = true;
    this.showLudoRandomandFrnds = false;
    this.showCreate = true;
  }
  joinTabShow(): void{
    this.showCODE = true;
  this.showJoin = true;
  this.showCreate = false;
  this.showLudoRandomandFrnds = false;
  }
  createCodeShow():void{
    this.showCreate = true;
    this.showJoin = false;
    this.showCODE = true;
    this.showLudoRandomandFrnds = false;
  }
  createCodeClick(){
    this.showCreate = false;
    this.showJoin = false;
    this.showCODE = false;
    this.showLudoRandomandFrnds = false;
    this.showcodeedit = true;
  }
}
