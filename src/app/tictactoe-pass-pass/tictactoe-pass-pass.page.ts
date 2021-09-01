import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tictactoe-pass-pass',
  templateUrl: './tictactoe-pass-pass.page.html',
  styleUrls: ['./tictactoe-pass-pass.page.scss'],
})
export class TictactoePassPassPage implements OnInit {
  public crossValue = 1;
  public circleValue = 2;
  public circleWin = false;
  public crossWin = false;
  public valuea: number;
  public valueb: number;
  public valuec: number;
  public valued: number;
  public valuee: number;
  public valuef: number;
  public valueg: number;
  public valueh: number;
  public valuei: number;
  public valueA: number;
  public valueB: number;
  public valueC: number;
  public valueD: number;
  public valueE: number;
  public valueF: number;
  public valueG: number;
  public valueH: number;
  public valueI: number;
  public crossShow1 = false;
  public crossShow2 = false;
  public crossShow3 = false;
  public crossShow4 = false;
  public crossShow5 = false;
  public crossShow6 = false;
  public crossShow7 = false;
  public crossShow8 = false;
  public crossShow9 = false;
  public circleShow2 = false;
  public circleShow1 = false;
  public circleShow3 = false;
  public circleShow4 = false;
  public circleShow5 = false;
  public circleShow6 = false;
  public circleShow7 = false;
  public circleShow8 = false;
  public circleShow9 = false;
  public userTurn = 1; 
  public runComputerOn = false;
  public crossLoss = false;
  public circleLoss = false;
  public gameDrawSuccess = false;
  public dig1Show = false;
  public dig2Show = false;
  public winline1Show = false;
  public winline2Show = false;
  public winline3Show = false;
  public winline4Show = false;
  public winline5Show = false;
  public winline6Show = false;
  public userTurnToRun = false;
  public userNotTurnToRun = true;
  public computerTurnToRun = false;
  public computerNotTurnToRun = true;
  public line1 = false;
  public line2 = false;
  public line3 = false;
  public dig1 = false;
  public dig = false;
  
  

computerTurnToRunFn():void{
  this.computerTurnToRun = true;
  this.computerNotTurnToRun = false;
  this.userTurnToRun = false;
  this.userNotTurnToRun = true;
 
}
userTurnToRunFn():void{
  this.computerTurnToRun = false;
  this.computerNotTurnToRun = true;
  this.userTurnToRun = true;
  this.userNotTurnToRun = false;
}
    gameDraw(): void{
      
      let x = this.userTurn;
      let y = 9;
      if (x > 9 ) {
        setTimeout(()=>{                
          this.gameDrawSuccess = true;
     }, 500);
        console.log("Game Draw")
      } else {
        console.log("Koi Jeet GYa")
      }
    }
  
  constructor() { }

  ngOnInit() {
    console.log(this.userTurn);
    this.gameDraw();
    // this.logicTIS();
  }

  // BOX TAP EVENTS

box1():void{
  let x = this.userTurn;
  let y = 9;

  this.userTurn +=1;
  console.log(this.userTurn);
if (x == 1 || x == 3 || x == 5 || x == 7 || x == 9){
  console.log('x Turn success');
  this.crosstap1();
  this.tictactoeWinChancesCIRCLE();
  this.tictactoeWinChancesCROSS();
  this.crossShow1 = true;
}
else if (x == 2 || x == 4 || x == 6 || x == 8)
{
  console.log('o turn Success');
  this.circletap1();
  this.tictactoeWinChancesCIRCLE();
  this.tictactoeWinChancesCROSS();
  this.circleShow1 = true;
}
else if (x > y) 
{
  console.log('Invalid ');
}
}

box2():void{
  let x = this.userTurn;
  let y = 9;

  this.userTurn +=1;
  console.log(this.userTurn);
if (x == 1 || x == 3 || x == 5 || x == 7 || x == 9){
  console.log('x Turn success');
  this.crosstap2();
  this.tictactoeWinChancesCIRCLE();
  this.tictactoeWinChancesCROSS();
  this.crossShow2 = true;
}
else if (x == 2 || x == 4 || x == 6 || x == 8)
{
  console.log('o turn Success');
  this.circletap2();
  this.tictactoeWinChancesCIRCLE();
  this.tictactoeWinChancesCROSS();
  this.circleShow2 = true;
}
else if (x > y) 
{
  console.log('Invalid ');
}
}
box3():void{
  let x = this.userTurn;
  let y = 9;

  this.userTurn +=1;
  console.log(this.userTurn);
if (x == 1 || x == 3 || x == 5 || x == 7 || x == 9){
  console.log('x Turn success');
  this.crosstap3();
  this.tictactoeWinChancesCIRCLE();
  this.tictactoeWinChancesCROSS();
  this.crossShow3 = true;
}
else if (x == 2 || x == 4 || x == 6 || x == 8)
{
  console.log('o turn Success');
  this.circletap3();
  this.tictactoeWinChancesCIRCLE();
  this.tictactoeWinChancesCROSS();
  this.circleShow3 = true;
}
else if (x > y) 
{
  console.log('Invalid ');
}
}
box4():void{
  let x = this.userTurn;
  let y = 9;

  this.userTurn +=1;
  console.log(this.userTurn);
if (x == 1 || x == 3 || x == 5 || x == 7 || x == 9){
  console.log('x Turn success');
  this.crosstap4();
  this.tictactoeWinChancesCIRCLE();
  this.tictactoeWinChancesCROSS();
  this.crossShow4 = true;
}
else if (x == 2 || x == 4 || x == 6 || x == 8)
{
  console.log('o turn Success');
  this.circletap4();
  this.tictactoeWinChancesCIRCLE();
  this.tictactoeWinChancesCROSS();
  this.circleShow4 = true;
}
else if (x > y) 
{
  console.log('Invalid ');
}
}
box5():void{
  let x = this.userTurn;
  let y = 9;

  this.userTurn +=1;
  console.log(this.userTurn);
if (x == 1 || x == 3 || x == 5 || x == 7 || x == 9){
  console.log('x Turn success');
  this.crosstap5();
  this.tictactoeWinChancesCIRCLE();
  this.tictactoeWinChancesCROSS();
  this.crossShow5 = true;
}
else if (x == 2 || x == 4 || x == 6 || x == 8)
{
  console.log('o turn Success');
  this.circletap5();
  this.tictactoeWinChancesCIRCLE();
  this.tictactoeWinChancesCROSS();
  this.circleShow5 = true;
}
else if (x > y) 
{
  console.log('Invalid ');
}
}
box6():void{
  let x = this.userTurn;
  let y = 9;

  this.userTurn +=1;
  console.log(this.userTurn);
if (x == 1 || x == 3 || x == 5 || x == 7 || x == 9){
  console.log('x Turn success');
  this.crosstap6();
  this.tictactoeWinChancesCIRCLE();
  this.tictactoeWinChancesCROSS();
  this.crossShow6 = true;
}
else if (x == 2 || x == 4 || x == 6 || x == 8)
{
  console.log('o turn Success');
  this.circletap6();
  this.tictactoeWinChancesCIRCLE();
  this.tictactoeWinChancesCROSS();
  this.circleShow6 = true;
}
else if (x > y) 
{
  console.log('Invalid ');
}
}
box7():void{
  let x = this.userTurn;
  let y = 9;

  this.userTurn +=1;
  console.log(this.userTurn);
if (x == 1 || x == 3 || x == 5 || x == 7 || x == 9){
  console.log('x Turn success');
  this.crosstap7();
  this.tictactoeWinChancesCIRCLE();
  this.tictactoeWinChancesCROSS();
  this.crossShow7 = true;
}
else if (x == 2 || x == 4 || x == 6 || x == 8)
{
  console.log('o turn Success');
  this.circletap7();
  this.tictactoeWinChancesCIRCLE();
  this.tictactoeWinChancesCROSS();
  this.circleShow7 = true;
}
else if (x > y) 
{
  console.log('Invalid ');
}
}
box8():void{
  let x = this.userTurn;
  let y = 9;

  this.userTurn +=1;
  console.log(this.userTurn);
if (x == 1 || x == 3 || x == 5 || x == 7 || x == 9){
  console.log('x Turn success');
  this.crosstap8();
  this.tictactoeWinChancesCIRCLE();
  this.tictactoeWinChancesCROSS();
  this.crossShow8 = true;
}
else if (x == 2 || x == 4 || x == 6 || x == 8)
{
  console.log('o turn Success');
  this.circletap8();
  this.tictactoeWinChancesCIRCLE();
  this.tictactoeWinChancesCROSS();
  this.circleShow8 = true;
}
else if (x > y) 
{
  console.log('Invalid ');
}
}
box9():void{
  let x = this.userTurn;
  let y = 9;

  this.userTurn +=1;
  console.log(this.userTurn);
if (x == 1 || x == 3 || x == 5 || x == 7 || x == 9){
  console.log('x Turn success');
  this.crosstap9();
  this.tictactoeWinChancesCIRCLE();
  this.tictactoeWinChancesCROSS();
  this.crossShow9 = true;
}
else if (x == 2 || x == 4 || x == 6 || x == 8)
{
  console.log('o turn Success');
  this.circletap9();
  this.tictactoeWinChancesCIRCLE();
  this.tictactoeWinChancesCROSS();
  this.circleShow9 = true;
}
else if (x > y) 
{
  console.log('Invalid ');
}
}

 // Restart Button
 restartGame():void{
  this.crossValue = 1;
this.circleValue = 2;
this.circleWin = false;
this.crossWin = false;
this.valuea = undefined;
this.valueb = undefined;
this.valuec = undefined;
this.valued = undefined;
this.valuee = undefined;
this.valuef = undefined;
this.valueg = undefined;
this.valueh = undefined;
this.valuei = undefined;
this.valueA = undefined;
this.valueB = undefined;
this.valueC = undefined;
this.valueD = undefined;
this.valueE = undefined;
this.valueF = undefined;
this.valueG = undefined;
this.valueH = undefined;
this.valueI = undefined;
this.crossShow1 = false;
this.crossShow2 = false;
this.crossShow3 = false;
this.crossShow4 = false;
this.crossShow5 = false;
this.crossShow6 = false;
this.crossShow7 = false;
this.crossShow8 = false;
this.crossShow9 = false;
this.circleShow2 = false;
this.circleShow1 = false;
this.circleShow3 = false;
this.circleShow4 = false;
this.circleShow5 = false;
this.circleShow6 = false;
this.circleShow7 = false;
this.circleShow8 = false;
this.circleShow9 = false;
this.userTurn = 1; 
this.runComputerOn = false;
this.crossLoss = false;
this.circleLoss = false;
this.gameDrawSuccess = false;
this.dig1Show = false;
this.dig2Show = false;
this.winline1Show = false;
this.winline2Show = false;
this.winline3Show = false;
this.winline4Show = false;
this.winline5Show = false;
this.winline6Show = false;
this.userTurnToRun = false;
this.userNotTurnToRun = true;
this.computerTurnToRun = false;
this.computerNotTurnToRun = true;
this.line1 = false;
this.line2 = false;
this.line3 = false;
this.dig1 = false;
this.dig = false;
}





  // Cross Taps
  crosstap1():void{
    this.valueA = 2;
    console.log(this.valueA);
  }
  crosstap2():void{
    this.valueB = 3;
    console.log(this.valueB);
  }
  crosstap3():void{
    this.valueC = 4;
    console.log(this.valueC);
  }
  crosstap4():void{
    this.valueD = 5;
    console.log(this.valueD);
  }
  crosstap5():void{
    this.valueE = 6;
    console.log(this.valueE);
  }
  crosstap6():void{
    this.valueF = 7;
    console.log(this.valueF);
  }
  crosstap7():void{
    this.valueG = 8;
    console.log(this.valueG);
  }
  crosstap8():void{
    this.valueH = 9;
    console.log(this.valueH);
  }
  crosstap9():void{
    this.valueI = 10;
    console.log(this.valueI);
  }

   // Circle Taps
   circletap1():void{
    this.valueA = 3;
    console.log(this.valueA);
  }
  circletap2():void{
    this.valueB = 4;
    console.log(this.valueB);
  }
  circletap3():void{
    this.valueC = 5;
    console.log(this.valueC);
  }
  circletap4():void{
    this.valueD = 6;
    console.log(this.valueD);
  }
  circletap5():void{
    this.valueE = 7;
    console.log(this.valueE);
  }
  circletap6():void{
    this.valueF = 8;
    console.log(this.valueF);
  }
  circletap7():void{
    this.valueG = 9;
    console.log(this.valueG);
  }
  circletap8():void{
    this.valueH = 10;
    console.log(this.valueH);
  }
  circletap9():void{
    this.valueI = 11;
    console.log(this.valueI);
  }



//  cross Win Chance
  tictactoeWinChancesCROSS(): void{
    if (this.valueA == 2 && this.valueB == 3 && this.valueC == 4){
      console.log("Cross Wins");
      this.crossWin = true;
    }
    else if (this.valueD == 5 && this.valueE == 6 && this.valueF == 7){
      console.log("Cross Wins");
      this.crossWin = true;
    }
    else if (this.valueG == 8 && this.valueH == 9 && this.valueI == 10){
      console.log("Cross Wins");
      this.crossWin = true;
    }
    else if (this.valueA == 2 && this.valueD == 5 && this.valueG == 8){
      console.log("Cross Wins");
      this.crossWin = true;
    }
    else if (this.valueB == 3 && this.valueE == 6 && this.valueH == 9){
      console.log("Cross Wins");
      this.crossWin = true;
    }
    else if (this.valueC == 4 && this.valueF == 7 && this.valueI == 10){
      console.log("Cross Wins");
      this.crossWin = true;
    }
    else if (this.valueC == 4 && this.valueE == 6 && this.valueG == 8){
      console.log("Cross Wins");
      this.crossWin = true;
    }
    else if (this.valueA == 2 && this.valueE == 6 && this.valueI == 10){
      console.log("Cross Wins");
      this.crossWin = true;
    }
    else{
      this.gameDraw();
    }
  }
  // Circle win chance
  tictactoeWinChancesCIRCLE(): void{
    if (this.valueA == 3 && this.valueB == 4 && this.valueC == 5){
      console.log("Circle Wins");
      this.circleWin = true;
    }
    else if (this.valueD == 6 && this.valueE == 7 && this.valueF == 8){
      console.log("Circle Wins");
      this.circleWin = true;
    }
    else if (this.valueG == 9 && this.valueH == 10 && this.valueI == 11){
      console.log("Circle Wins");
      this.circleWin = true;
    }
    else if (this.valueA == 3 && this.valueD == 6 && this.valueG == 9){
      console.log("Circle Wins");
      this.circleWin = true;
    }
    else if (this.valueB == 4 && this.valueE == 7 && this.valueH == 10){
      console.log("Circle Wins");
      this.circleWin = true;
    }
    else if (this.valueC == 5 && this.valueF == 8 && this.valueI == 11){
      console.log("Circle Wins");
      this.circleWin = true;
    }
    else if (this.valueC == 5 && this.valueE == 7 && this.valueG == 9){
      console.log("Circle Wins");
      this.circleWin = true;
    }
    else if (this.valueA == 3 && this.valueE == 7 && this.valueI == 11){
      console.log("Circle Wins");
      this.circleWin = true;
    }
    else{
      this.gameDraw();
    }
  }
}
