import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tictactoe-vs-computer',
  templateUrl: './tictactoe-vs-computer.page.html',
  styleUrls: ['./tictactoe-vs-computer.page.scss'],
})
export class TictactoeVsComputerPage implements OnInit {
  public showGameBoard = false;
  public computerFirstSelectedFn = false;
  public userFirstSelectedFn = false;
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
  public showSelectTurnMode = true;
  
  
    constructor() { }
  
    ngOnInit() {
      console.log(this.userTurn);
      // this.autoRunGame();
      // this.logicTIS();
    }

  
    computerFirstSelected(): void{
      
    this.userTurn = 1;
    this.showSelectTurnMode = false;
    this.computerFirstSelectedFn = true;
      this.showGameBoard = true;
      setTimeout(()=>{   
        this.circletap9();
        this.circleShow9 = true;
      }, 500);
    }
    userFirstSelected(): void{
      this.showGameBoard = true;
      this.showSelectTurnMode = false;
    }

computerTurnToRunFn():void{
  this.computerTurnToRun = true;
  this.computerNotTurnToRun = false;
  this.userTurnToRun = false;
  this.userNotTurnToRun = true;
  setTimeout(()=>{                
    this.userTurnToRunFn();
  }, 500);
}
userTurnToRunFn():void{
  this.computerTurnToRun = false;
  this.computerNotTurnToRun = true;
  this.userTurnToRun = true;
  this.userNotTurnToRun = false;
}
    gameDraw(): void{
      console.log(this.computerFirstSelectedFn);
      
  let a = this.valuea;
  let b = this.valueb;
  let c = this.valuec;
  let d = this.valued;
  let e = this.valuee;
  let f = this.valuef;
  let g = this.valueg;
  let h = this.valueh;
  let i = this.valuei;
      let x = this.userTurn;
      let y = 9;
      if(a == undefined) {
        if (b == undefined) {
          if (c == undefined) {
            if (d == undefined) {
              if (e == undefined) {
                if (f == undefined) {
                  if (g == undefined) {
                    if (h == undefined) {
                      if (i == undefined) {
                        if (this.crossLoss = false) {
                        setTimeout(()=>{                
                          this.gameDrawSuccess = true;
                          console.log("Game Draw all filled");
                     }, 500);
                        console.log("Game Draw");
                        } else {
                          
                        console.log("Kon Jeta  hfkdhfdhfu 1111");
                        }
                      } else {
                        console.log("box fill nhi hai sab");
                      }
                    } else {
                      console.log("box fill nhi hai sab");
                    }
                  } else {
                    console.log("box fill nhi hai sab");
                  }
                } else {
                  console.log("box fill nhi hai sab");
                }
              } else {
                console.log("box fill nhi hai sab");
              }
            } else {
              console.log("box fill nhi hai sab");
            }
          } else {
            console.log("box fill nhi hai sab");
          }
        } else {
          console.log("box fill nhi hai sab");
        }
      }
      else if(this.computerFirstSelectedFn == true && x >= 9 && this.crossWin == false && this.circleWin == false){
        setTimeout(()=>{                
          this.gameDrawSuccess = true;
          console.log("Game Draw > 8");
          console.log(this.computerFirstSelectedFn);
           }, 500);
      } else if(x > 9){  setTimeout(()=>{                
        this.gameDrawSuccess = true;
        console.log("Game Draw > 9");
         }, 500);
        if (this.crossWin = false) {
          if (this.circleWin = false){
          setTimeout(()=>{                
            this.gameDrawSuccess = true;
             }, 500);
          console.log("Game Draw")}
          else{
            
          console.log("Kon Jeta  hfkdhfdhfu 111-2");
          }
       } else {
            
          console.log("Kon Jeta  hfkdhfdhfu nhi nhi nhi");
          console.log(this,this.crossWin);
          }
      }
      else{
        
        console.log("Koi Jeet GYa")
      }
    }
  
    runComputer(): void{
      this.gameDraw();
      let x = this.userTurn;
      let y = 9;
      if (x == 2 && this.runComputerOn == true){
        setTimeout(()=>{            
          this.computerTurn1_1();
      this.userTurnToRunFn();
     }, 500);
      }
      else if (x == 4 && this.runComputerOn == true)
      {
        setTimeout(()=>{            
        this.computerTurn1_2();
        this.userTurnToRunFn();
   }, 500);
        console.log("User Turn 2");
      }
      else if (x == 6 && this.runComputerOn == true)
      {
        setTimeout(()=>{  
        this.computerTurn1_3();
        this.userTurnToRunFn();
      }, 500);
        console.log("User Turn 3");
      }
      else if (x == 8 && this.runComputerOn == true)
      {
        setTimeout(()=>{
        this.computerTurn1_4();
        this.userTurnToRunFn();
      }, 500);
        console.log("User Turn 4");
      }
      else if(x == 10 || x == 9){
        this.gameDraw();
      }
      else if (x > y) 
      {
        console.log('Invalid ');
      }
    }

// Computer Chance 1st 
computerTurn1_1(): void{
  let a = this.valueA;
  let b = this.valueB;
  let c = this.valueC;
  let d = this.valueD;
  let e = this.valueE;
  let f = this.valueF;
  let g = this.valueG;
  let h = this.valueH;
  let i = this.valueI;
  let y = 12;

  this.runComputerOn = false;
  console.log(this.userTurn);
  
if (a == 2){
  console.log('a = 1');
  this.boxc5();
}
else if (b == 3)
{
  console.log('b = 2');
  this.boxc5();
}
else if (c == 4)
{
  console.log('c = 3');
  this.boxc5();
}
else if (d == 5)
{
  console.log('d = 4');
  this.boxc5();
}
else if (e == 6)
{
  console.log('e = 5');
  this.boxc3();
}
else if (f == 7)
{
  console.log('f = 6');
  this.boxc5();
}
else if (g == 8)
{
  console.log('g = 7');
  this.boxc5();
}
else if (h == 9)
{
  console.log('h = 8');
  this.boxc5();
}
else if (i == 10)
{
  console.log('i = 9');
  this.boxc5();
}
else{
  this.randomRunCommand();
}
}
// 2nd chance
computerTurn1_2(): void{
  let a = this.valueA;
  let b = this.valueB;
  let c = this.valueC;
  let d = this.valueD;
  let e = this.valueE;
  let f = this.valueF;
  let g = this.valueG;
  let h = this.valueH;
  let i = this.valueI;
  let y = 12;

  this.runComputerOn = false;
  console.log(this.userTurn);
  
if (a == 2 && b == 3 && e == 7){
  console.log('x 2nd Turn success');
  this.boxc3();
}
else if (a == 2 && e == 7 && c == 4)
{
  console.log('invalid turn');
  this.boxc2();
}
else if (a == 2 && e == 7 && d == 5)
{
  console.log('invalid turn');
  this.boxc7();
}
else if (a == 2 && e == 7 && f == 7)
{
  console.log('invalid turn');
  this.boxc3();
}
else if (a == 2 && e == 7 && g == 8)
{
  console.log('invalid turn');
  this.boxc4();
}
else if (a == 2 && e == 7 && h == 9)
{
  console.log('invalid turn');
  this.boxc7();
}
else if (a == 2 && e == 7 && i == 10)
{
  console.log('invalid turn');
  this.boxc6();
}
else if (b == 3 && e == 7 && a == 2)
{
  console.log('invalid turn');
  this.boxc3();
}
else if (b == 3 && e == 7 && c == 4)
{
  console.log('invalid turn');
  this.boxc1();
}
else if (b == 3 && e == 7 && d == 5)
{
  console.log('invalid turn');
  this.boxc1();
}
else if (b == 3 && e == 7 && f == 7)
{
  console.log('invalid turn');
  this.boxc3();
}
else if (b == 3 && e == 7 && g == 8)
{
  console.log('invalid turn');
  this.boxc1();
}
else if (b == 3 && e == 7 && h == 9)
{
  console.log('invalid turn');
  this.boxc3();
}
else if (b == 3 && e == 7 && i == 10)
{
  console.log('invalid turn');
  this.boxc3();
}
else{
  this.randomRunCommand();
}
}

// 3rd chance
computerTurn1_3(): void{
  let a = this.valueA;
  let b = this.valueB;
  let c = this.valueC;
  let d = this.valueD;
  let e = this.valueE;
  let f = this.valueF;
  let g = this.valueG;
  let h = this.valueH;
  let i = this.valueI;
  let y = 12;

  this.runComputerOn = false;
  console.log(this.userTurn);
  
if (a == 2 && b == 3 && e == 7 && c == 5 && g == 8){
  console.log('x 2nd Turn success');
  this.boxc4();
}
else if (a == 2 && e == 7 && c == 4 && b == 4 && h == 9)
{
  console.log('invalid turn');
  this.boxc6();
}
else if (a == 2 && e == 7 && d == 5 && g == 9 && c == 4)
{
  console.log('invalid turn');
  this.boxc2();
}
else if (a == 2 && e == 7 && f == 7 && c == 5 && g == 8)
{
  console.log('invalid turn');
  this.boxc4();
}
else if (a == 2 && e == 7 && g == 8 && d == 6 && f == 7)
{
  console.log('invalid turn');
  this.boxc8();
}
else if (a == 2 && e == 7 && h == 9 && g == 9 && c == 4)
{
  console.log('invalid turn');
  this.boxc2();
}
else if (a == 2 && e == 7 && i == 10 && f == 8 && d == 5)
{
  console.log('invalid turn');
  this.boxc7();
}
else if (b == 3 && e == 7 && a == 2 && c == 5 && g ==8)
{
  console.log('invalid turn');
  this.boxc4();
}
else if (b == 3 && e == 7 && c == 4 && a == 3 && i == 10)
{
  console.log('invalid turn');
  this.boxc6();
}
else if (b == 3 && e == 7 && d == 5 && a == 3 && i == 10)
{
  console.log('invalid turn');
  this.boxc3();
}
else if (b == 3 && e == 7 && f == 7 && c == 5 && g == 8)
{
  console.log('invalid turn');
  this.boxc9();
}
else if (b == 3 && e == 7 && g == 8 && a == 3 && i == 10)
{
  console.log('invalid turn');
  this.boxc8();
}
else if (b == 3 && e == 7 && h == 9 && c == 5 && g == 8)
{
  console.log('invalid turn');
  this.boxc9();
}
else if (b == 3 && e == 7 && i == 10 && c == 5 && g == 8)
{
  console.log('invalid turn');
  this.boxc8();
}
else  
{
  console.log('Invalid ');
  this.randomRunCommand();
}
}

// 4th chance
computerTurn1_4(): void{
  let a = this.valueA;
  let b = this.valueB;
  let c = this.valueC;
  let d = this.valueD;
  let e = this.valueE;
  let f = this.valueF;
  let g = this.valueG;
  let h = this.valueH;
  let i = this.valueI;
  let y = 12;

  this.runComputerOn = false;
  console.log(this.userTurn);
  
if (a == 2 && b == 3 && e == 7 && c == 5 && g == 8 && d == 6 && f == 7){
  console.log('x 2nd Turn success');
  this.boxc9();
}
else if (a == 2 && e == 7 && c == 4 && b == 4 && h == 9 && f == 8 && d == 5)
{
  console.log('invalid turn');
  this.boxc7();
}
else if (a == 2 && e == 7 && d == 5 && g == 9 && c == 4 && b == 4 && h == 9)
{
  console.log('invalid turn');
  this.boxc6();
}
else if (a == 2 && e == 7 && f == 7 && c == 5 && g == 8 && d == 6 && i == 10)
{
  console.log('invalid turn');
  this.boxc8();
}
else if (a == 2 && e == 7 && f == 7 && c == 5 && g == 8 && d == 6 && h == 9)
{
  console.log('invalid turn');
  this.boxc9();
}
else if (a == 2 && e == 7 && g == 8 && d == 6 && f == 7 && h == 10 && b == 3)
{
  console.log('invalid turn');
  this.boxc3();
}
else if (a == 2 && e == 7 && h == 9 && g == 9 && c == 4 && b == 4 && f == 7)
{
  console.log('invalid turn');
  this.boxc9();
}
else if (a == 2 && e == 7 && h == 9 && g == 9 && c == 4 && b == 4 && i == 10)
{
  console.log('invalid turn');
  this.boxc6();
}
else if (a == 2 && e == 7 && i == 10 && f == 8 && d == 5 && g == 9 && c == 4)
{
  console.log('invalid turn');
  this.boxc2();
}
else if (b == 3 && e == 7 && a == 2 && c == 5 && g == 8 && d == 6 && f == 7)
{
  console.log('invalid turn');
  this.boxc8();
}
else if (b == 3 && e == 7 && c == 4 && a == 3 && i == 10 && f == 8 && d == 5)
{
  console.log('invalid turn');
  this.boxc8();
}
else if (b == 3 && e == 7 && d == 5 && a == 3 && i == 10 && c == 5 && g == 8)
{
  console.log('invalid turn');
  this.boxc8();
}
else if (b == 3 && e == 7 && f == 7 && c == 5 && g == 8 && i == 10 && a == 2)
{
  console.log('invalid turn');
  this.boxc4();
}
else if (b == 3 && e == 7 && g == 8 && a == 3 && i == 10 && h == 10 && f == 7)
{
  console.log('invalid turn');
  this.boxc3();
}
else if (b == 3 && e == 7 && g == 8 && a == 3 && i == 10 && h == 10 && c == 4)
{
  console.log('invalid turn');
  this.boxc6();
}
else if (b == 3 && e == 7 && g == 8 && a == 3 && i == 10 && h == 10 && d == 5)
{
  console.log('invalid turn');
  this.boxc6();
}
else if (b == 3 && e == 7 && h == 9 && c == 5 && g == 8 && i == 11 && a == 2)
{
  console.log('invalid turn');
  this.boxc4();
}
else if (b == 3 && e == 7 && i == 10 && c == 5 && g == 8 && h == 10 && a == 2)
{
  console.log('invalid turn');
  this.boxc4();
}
else if (b == 3 && e == 7 && i == 10 && c == 5 && g == 8 && h == 10 && d == 5)
{
  console.log('invalid turn');
  this.boxc1();
}
else if (b == 3 && e == 7 && i == 10 && c == 5 && g == 8 && h == 10 && f == 7)
{
  console.log('invalid turn');
  this.boxc4();
}
else{
  this.randomRunCommand();
}
}

    // BOX TAP USER EVENTS
  
  box1():void{
    let x = this.userTurn;
    let y = 9;
    let a = this.valuea;
  if (a == undefined) {
    this.userTurn +=1;
    console.log(this.userTurn);
  if (x == 1 || x == 3 || x == 5 || x == 7 || x == 9 ){
    console.log('x Turn success');
    this.crosstap1();
    this.tictactoeWinChancesCIRCLE();
    this.tictactoeWinChancesCROSS();
    this.crossShow1 = true;
    this.computerTurnToRunFn();
    this.runComputerOn = true;
    this.runComputer();
    
  }
  else if (x == 2 || x == 4 || x == 6 || x == 8 || x == 10)
  {
    console.log('o turn Success');
    this.circletap1();
    this.tictactoeWinChancesCIRCLE();
    this.tictactoeWinChancesCROSS();
    this.circleShow1 = true;
    this.computerTurnToRunFn();
    this.runComputerOn = true;
    this.runComputer();
  }
  }
   else {
    console.log('Box Having Value ');
  }

  }
  
  box2():void{
    let x = this.userTurn;
    let y = 9;
  
    let a = this.valueb;
    console.log(a);
  if (a == undefined) {
    this.userTurn +=1;
    console.log(this.userTurn);
  if (x == 1 || x == 3 || x == 5 || x == 7 || x == 9){
    console.log('x Turn success');
    this.crosstap2();
    this.tictactoeWinChancesCIRCLE();
    this.tictactoeWinChancesCROSS();
    this.crossShow2 = true;
    this.computerTurnToRunFn();
    this.runComputerOn = true;
    this.runComputer();
  }
  else if (x == 2 || x == 4 || x == 6 || x == 8 || x == 10)
  {
    console.log('o turn Success');
    this.circletap2();
    this.tictactoeWinChancesCIRCLE();
    this.tictactoeWinChancesCROSS();
    this.circleShow2 = true;
    this.computerTurnToRunFn();
    this.runComputerOn = true;
    this.runComputer();
  }
}
  else 
  {
    console.log('Box Having ');
  }
  }
  box3():void{
    let x = this.userTurn;
    let y = 9;
  
    let a = this.valuec;
  if (a == undefined) {
    this.userTurn +=1;
    console.log(this.userTurn);
  if (x == 1 || x == 3 || x == 5 || x == 7 || x == 9){
    console.log('x Turn success');
    this.crosstap3();
    this.tictactoeWinChancesCIRCLE();
    this.tictactoeWinChancesCROSS();
    this.crossShow3 = true;
    this.computerTurnToRunFn();
    this.runComputerOn = true;
    this.runComputer();
  }
  else if (x == 2 || x == 4 || x == 6 || x == 8 || x == 10)
  {
    console.log('o turn Success');
    this.circletap3();
    this.tictactoeWinChancesCIRCLE();
    this.tictactoeWinChancesCROSS();
    this.circleShow3 = true;
    this.computerTurnToRunFn();
    this.runComputerOn = true;
    this.runComputer();
  }}
  else 
  {
    console.log('Invalid ');
  }
  }
  box4():void{
    let x = this.userTurn;
    let y = 9;
  
    let a = this.valued;
  if (a == undefined) {
    this.userTurn +=1;
    console.log(this.userTurn);
  if (x == 1 || x == 3 || x == 5 || x == 7 || x == 9){
    console.log('x Turn success');
    this.crosstap4();
    this.tictactoeWinChancesCIRCLE();
    this.tictactoeWinChancesCROSS();
    this.crossShow4 = true;
    this.computerTurnToRunFn();
    this.runComputerOn = true;
    this.runComputer();
  }
  else if (x == 2 || x == 4 || x == 6 || x == 8 || x == 10)
  {
    console.log('o turn Success');
    this.circletap4();
    this.tictactoeWinChancesCIRCLE();
    this.tictactoeWinChancesCROSS();
    this.circleShow4 = true;
    this.computerTurnToRunFn();
    this.runComputerOn = true;
    this.runComputer();
    }}
  else
  {
    console.log('Invalid ');
  }
  }
  box5():void{
    let x = this.userTurn;
    let y = 9;
  
    let a = this.valuee;
  if (a == undefined) {
    this.userTurn +=1;
    console.log(this.userTurn);
  if (x == 1 || x == 3 || x == 5 || x == 7 || x == 9){
    console.log('x Turn success');
    this.crosstap5();
    this.tictactoeWinChancesCIRCLE();
    this.tictactoeWinChancesCROSS();
    this.crossShow5 = true;
    this.computerTurnToRunFn();
    this.runComputerOn = true;
    this.runComputer();
  }
  else if (x == 2 || x == 4 || x == 6 || x == 8 || x == 10)
  {
    console.log('o turn Success');
    this.circletap5();
    this.tictactoeWinChancesCIRCLE();
    this.tictactoeWinChancesCROSS();
    this.circleShow5 = true;
    this.computerTurnToRunFn();
    this.runComputerOn = true;
    this.runComputer();
  }}
  else 
  {
    console.log('Invalid ');
  }
  }
  box6():void{
    let x = this.userTurn;
    let y = 9;
  
    let a = this.valuef;
  if (a == undefined) {
    this.userTurn +=1;
    console.log(this.userTurn);
  if (x == 1 || x == 3 || x == 5 || x == 7 || x == 9){
    console.log('x Turn success');
    this.crosstap6();
    this.tictactoeWinChancesCIRCLE();
    this.tictactoeWinChancesCROSS();
    this.crossShow6 = true;
    this.computerTurnToRunFn();
    this.runComputerOn = true;
    this.runComputer();
  }
  else if (x == 2 || x == 4 || x == 6 || x == 8 || x == 10)
  {
    console.log('o turn Success');
    this.circletap6();
    this.tictactoeWinChancesCIRCLE();
    this.tictactoeWinChancesCROSS();
    this.circleShow6 = true;
    this.computerTurnToRunFn();
    this.runComputerOn = true;
    this.runComputer();
  }}
  else 
  {
    console.log('Invalid ');
  }
  }
  box7():void{
    let x = this.userTurn;
    let y = 9;
  
    let a = this.valueg;
  if (a == undefined) {
    this.userTurn +=1;
    console.log(this.userTurn);
  if (x == 1 || x == 3 || x == 5 || x == 7 || x == 9){
    console.log('x Turn success');
    this.crosstap7();
    this.tictactoeWinChancesCIRCLE();
    this.tictactoeWinChancesCROSS();
    this.crossShow7 = true;
    this.computerTurnToRunFn();
    this.runComputerOn = true;
    this.runComputer();
  }
  else if (x == 2 || x == 4 || x == 6 || x == 8 || x == 10)
  {
    console.log('o turn Success');
    this.circletap7();
    this.tictactoeWinChancesCIRCLE();
    this.tictactoeWinChancesCROSS();
    this.circleShow7 = true;
    this.computerTurnToRunFn();
    this.runComputerOn = true;
    this.runComputer();
  }}
  else 
  {
    console.log('Invalid ');
  }
  }
  box8():void{
    let x = this.userTurn;
    let y = 9;
  
    let a = this.valueh;
  if (a == undefined) {
    this.userTurn +=1;
    console.log(this.userTurn);
  if (x == 1 || x == 3 || x == 5 || x == 7 || x == 9){
    console.log('x Turn success');
    this.crosstap8();
    this.tictactoeWinChancesCIRCLE();
    this.tictactoeWinChancesCROSS();
    this.crossShow8 = true;
    this.computerTurnToRunFn();
    this.runComputerOn = true;
    this.runComputer();
  }
  else if (x == 2 || x == 4 || x == 6 || x == 8 || x == 10)
  {
    console.log('o turn Success');
    this.circletap8();
    this.tictactoeWinChancesCIRCLE();
    this.tictactoeWinChancesCROSS();
    this.circleShow8 = true;
    this.computerTurnToRunFn();
    this.runComputerOn = true;
    this.runComputer();
  }}
  else
  {
    console.log('Invalid ');
  }
  }
  box9():void{
    let x = this.userTurn;
    let y = 9;
  
    let a = this.valuei;
  if (a == undefined) {
    this.userTurn +=1;
    console.log(this.userTurn);
  if (x == 1 || x == 3 || x == 5 || x == 7 || x == 9){
    console.log('x Turn success');
    this.crosstap9();
    this.tictactoeWinChancesCIRCLE();
    this.tictactoeWinChancesCROSS();
    this.crossShow9 = true;
    this.computerTurnToRunFn();
    this.runComputerOn = true;
    this.runComputer();
  }
  else if (x == 2 || x == 4 || x == 6 || x == 8 || x == 10)
  {
    console.log('o turn Success');
    this.circletap9();
    this.tictactoeWinChancesCIRCLE();
    this.tictactoeWinChancesCROSS();
    this.circleShow9 = true;
    this.computerTurnToRunFn();
    this.runComputerOn = true;
    this.runComputer();
  }}
  else
  {
    console.log('Invalid ');
  }
  }



  // Box Tap Computer
  
    // BOX TAP EVENTS
  
    boxc1():void{
      let x = this.userTurn;
      let y = 9;
    
      this.userTurnToRunFn();
      
    let a = this.valuea;
    if (a == undefined) { 
      this.userTurn +=1;
      console.log(this.userTurn);
    if (x == 1 || x == 3 || x == 5 || x == 7 || x == 9){
      console.log('x Turn success');
    }
    else if (x == 2 || x == 4 || x == 6 || x == 8 || x == 10)
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
  else{
    this.randomRunCommand();
  }
    }
    
    boxc2():void{
      let x = this.userTurn;
      let y = 9;
      this.userTurnToRunFn(); 
      let a = this.valueb;
      if (a == undefined) {
      this.userTurn +=1;
      console.log(this.userTurn);
    if (x == 1 || x == 3 || x == 5 || x == 7 || x == 9){
      console.log('x Turn success');
    }
    else if (x == 2 || x == 4 || x == 6 || x == 8 || x == 10)
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
  else{
    this.randomRunCommand();
  }
    }
    boxc3():void{
      let x = this.userTurn;
      let y = 9;
    
      this.userTurnToRunFn();
      let a = this.valuec;
      if (a == undefined) {
      this.userTurn +=1;
      console.log(this.userTurn);
    if (x == 1 || x == 3 || x == 5 || x == 7 || x == 9){
      console.log('x Turn success');
    }
    else if (x == 2 || x == 4 || x == 6 || x == 8 || x == 10)
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
  else{
    this.randomRunCommand();
  }
    }
    boxc4():void{
      let x = this.userTurn;
      let y = 9;
    
      this.userTurnToRunFn();
      let a = this.valued;
      if (a == undefined) {
      this.userTurn +=1;
      console.log(this.userTurn);
    if (x == 1 || x == 3 || x == 5 || x == 7 || x == 9){
      console.log('x Turn success');
    }
    else if (x == 2 || x == 4 || x == 6 || x == 8 || x == 10)
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
  else{
    this.randomRunCommand();
  }
    }
    boxc5():void{
      let x = this.userTurn;
      let y = 9;
    
      this.userTurnToRunFn();
      let a = this.valuee;
      if (a == undefined) {
      this.userTurn +=1;
      console.log(this.userTurn);
    if (x == 1 || x == 3 || x == 5 || x == 7 || x == 9){
      console.log('x Turn success');
    }
    else if (x == 2 || x == 4 || x == 6 || x == 8 || x == 10)
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
  else{
    this.randomRunCommand();
  }
    }
    boxc6():void{
      let x = this.userTurn;
      let y = 9;
    
      this.userTurnToRunFn();
      let a = this.valuef;
      if (a == undefined) {
      this.userTurn +=1;
      console.log(this.userTurn);
    if (x == 1 || x == 3 || x == 5 || x == 7 || x == 9){
      console.log('x Turn success');
    }
    else if (x == 2 || x == 4 || x == 6 || x == 8 || x == 10)
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
  else{
    this.randomRunCommand();
  }
    }
    boxc7():void{
      let x = this.userTurn;
      let y = 9;
    
      this.userTurnToRunFn();
      let a = this.valueg;
      if (a == undefined) {
      this.userTurn +=1;
      console.log(this.userTurn);
    if (x == 1 || x == 3 || x == 5 || x == 7 || x == 9){
      console.log('x Turn success');
    }
    else if (x == 2 || x == 4 || x == 6 || x == 8 || x == 10)
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
  else{
    this.randomRunCommand();
  }
    }
    boxc8():void{
      let x = this.userTurn;
      let y = 9;
    
      this.userTurnToRunFn();
      let a = this.valueh;
      if (a == undefined) {
      this.userTurn +=1;
      console.log(this.userTurn);
    if (x == 1 || x == 3 || x == 5 || x == 7 || x == 9){
      console.log('x Turn success');
    }
    else if (x == 2 || x == 4 || x == 6 || x == 8 || x == 10)
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
  else{
    this.randomRunCommand();
  }
    }
    boxc9():void{
      let x = this.userTurn;
      let y = 9;
    
      this.userTurnToRunFn();
      let a = this.valuei;
      if (a == undefined) {
      this.userTurn +=1;
      console.log(this.userTurn);
    if (x == 1 || x == 3 || x == 5 || x == 7 || x == 9){
      console.log('x Turn success');
    }
    else if (x == 2 || x == 4 || x == 6 || x == 8 || x == 10)
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
  else{
    this.randomRunCommand();
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
  this.userFirstSelectedFn = false;
  this.computerFirstSelectedFn = false;
  this.showGameBoard = false;
  this.showSelectTurnMode = true;
  }
  
  
  
  
  
  
    // Cross Taps
    crosstap1():void{
      this.valuea = 1;
      this.valueA = 2;
      console.log(this.valueA);
    }
    crosstap2():void{
      this.valueb = 1;
      this.valueB = 3;
      console.log(this.valueB);
    }
    crosstap3():void{
      this.valuec = 1;
      this.valueC = 4;
      console.log(this.valueC);
    }
    crosstap4():void{
      this.valued = 1;
      this.valueD = 5;
      console.log(this.valueD);
    }
    crosstap5():void{
      this.valuee = 1;
      this.valueE = 6;
      console.log(this.valueE);
    }
    crosstap6():void{
      this.valuef = 1;
      this.valueF = 7;
      console.log(this.valueF);
    }
    crosstap7():void{
      this.valueg = 1;
      this.valueG = 8;
      console.log(this.valueG);
    }
    crosstap8():void{
      this.valueh = 1;
      this.valueH = 9;
      console.log(this.valueH);
    }
    crosstap9():void{
      this.valuei = 1;
      this.valueI = 10;
      console.log(this.valueI);
    }
  
     // Circle Taps
     circletap1():void{
      this.valuea = 2;
      this.valueA = 3;
      console.log(this.valueA);
    }
    circletap2():void{
      this.valueb = 2;
      this.valueB = 4;
      console.log(this.valueB);
    }
    circletap3():void{
      this.valuec = 2;
      this.valueC = 5;
      console.log(this.valueC);
    }
    circletap4():void{
      this.valued = 2;
      this.valueD = 6;
      console.log(this.valueD);
    }
    circletap5():void{
      this.valuee = 2;
      this.valueE = 7;
      console.log(this.valueE);
    }
    circletap6():void{
      this.valuef = 2;
      this.valueF = 8;
      console.log(this.valueF);
    }
    circletap7():void{
      this.valueg = 2;
      this.valueG = 9;
      console.log(this.valueG);
    }
    circletap8():void{
      this.valueh = 2;
      this.valueH = 10;
      console.log(this.valueH);
    }
    circletap9():void{
      this.valuei = 2;
      this.valueI = 11;
      console.log(this.valueI);
    }
  
  
  
  //  cross Win Chance
    tictactoeWinChancesCROSS(): void{
      let a = this.valuea;
      let b = this.valueb;
      let c = this.valuec;
      let d = this.valued;
      let e = this.valuee;
      let f = this.valuef;
      let g = this.valueg;
      let h = this.valueh;
      let i = this.valuei;
      this.gameDraw();
      if (a == 1 && b == 1 && c == 1){
        console.log("Cross Wins");
        this.winline1Show = true;
        this.crossWin = true;
        return;
      }
      else if (d == 1 && e == 1 && f == 1){
        console.log("Cross Wins");
        this.winline2Show = true;
        this.crossWin = true;
        return;
      }
      else if (g == 1 && h == 1 && i == 1){
        console.log("Cross Wins");
        this.winline3Show = true;
        this.crossWin = true;
        return;
      }
      else if (a == 1 && d == 1 && g == 1){
        console.log("Cross Wins");
        this.winline3Show = true;
        this.crossWin = true;
        return;
      }
      else if (b == 1 && e == 1 && h == 1){
        console.log("Cross Wins");
        this.winline5Show = true;
        this.crossWin = true;
        return;
      }
      else if (c == 1 && f == 1 && i == 1){
        console.log("Cross Wins");
        this.winline6Show = true;
        this.crossWin = true;
        return;
      }
      else if (a == 1 && e == 1 && i == 1){
        console.log("Cross Wins");
        this.dig2Show = true;
        this.crossWin = true;
        return;
      }
      else if (g == 1 && e == 1 && c == 1){
        console.log("Cross Wins");
        this.dig1Show = true;
        this.crossWin = true;
        return;
      }
      else if (a == 2 && b == 2 && c == 2){
        console.log("Circle Wins");
        this.winline1Show = true;
        this.circleWin = true;
        return;
      }
      else if (d == 2 && e == 2 && f == 2){
        console.log("Circle Wins");
        this.winline2Show = true;
        this.circleWin = true;
        return;
      }
      else if (g == 2 && h == 2 && i == 2){
        console.log("Circle Wins");
        this.winline3Show = true;
        this.circleWin = true;
        return;
      }
      else if (a == 2 && d == 2 && g == 2){
        console.log("Circle Wins");
        this.winline4Show = true;
        this.circleWin = true;
        return;
      }
      else if (b == 2 && e == 2 && h == 2){
        console.log("Circle Wins");
        this.winline5Show = true;
        this.circleWin = true;
        return;
      }
      else if (c == 2 && f == 2 && i == 2){
        console.log("Circle Wins");
        this.winline6Show = true;
        this.circleWin = true;
        return;
      }
      else if (a == 2 && e == 2 && i == 2){
        console.log("Circle Wins");
        this.dig2Show = true;
        this.circleWin = true;
        return;
      }
      else if (c == 2 && e == 2 && g == 2){
        console.log("Circle Wins");
        this.dig1Show = true;
        this.circleWin = true;
        return;
      }
      else {
        this.crossLoss = true;
        this.circleLoss = true;
        this.autoRunGame();
        console.log("Circle Not win so can't runauto");
      }
    }
    // Circle win chance
    tictactoeWinChancesCIRCLE(): void{
      let a = this.valuea;
      let b = this.valueb;
      let c = this.valuec;
      let d = this.valued;
      let e = this.valuee;
      let f = this.valuef;
      let g = this.valueg;
      let h = this.valueh;
      let i = this.valuei;
      
    }



  validRun(): void{
      let x = this.userTurn;
      let y = 9;
        if (x == 2 || x == 4 || x == 6 || x == 8 || x == 10) {
          this.defineChance();
          this.defineChanceHards();
          console.log("Auto Run Works");
        } else {
          
            console.log("Not Computer's turn to win");
        }
  }

autoRunGame(): void{
  if (this.winline1Show == true) {
    console.log("Somone Wins");
  } else if (this.winline2Show == true) {
    console.log("Somone Wins");
  } else if (this.winline3Show == true) {
    console.log("Somone Wins");
  } else if (this.winline4Show == true) {
    console.log("Somone Wins");
  } else if (this.winline5Show == true) {
    console.log("Somone Wins");
  } else if (this.winline6Show == true) {
    console.log("Somone Wins");
  } else if (this.dig1Show == true) {
    console.log("Somone Wins");
  } else if (this.dig2Show == true) {
    console.log("Somone Wins");
  } else {
    this.validRun();
  }
  
}

    defineChanceHards(): void{
      let a = this.valuea;
      let b = this.valueb;
      let c = this.valuec;
      let d = this.valued;
      let e = this.valuee;
      let f = this.valuef;
      let g = this.valueg;
      let h = this.valueh;
      let i = this.valuei;
      let x = this.userTurn;
      let y = 9;
      console.log( a, b, c, d, e, f, g, h, i);
      if (a == 1 && b == 1 && c == undefined|| b == 1 && c == 1 && a == undefined|| a == 1 && c == 1&& b == undefined) {
            this.line1Win();
            console.log("Line1win 1");
            console.log(x);
      }
      else if(a == 1 && d == 1 && g == undefined|| g == 1 && d == 1 && a == undefined|| g == 1 && a == 1 && d == undefined){
        this.line1Win();
        console.log("Line1win 1"); 
        console.log(x);
      }
      else if(d == 1 && e == 1 && f == undefined || e == 1 && f == 1 && d == undefined || d == 1 && f == 1 && e == undefined ){
            this.line2Win();
            console.log("Line2win 1"); 
            console.log(x);
      }
      else if(b == 1 && e == 1 && h == undefined|| e == 1 && h == 1 && b == undefined|| h == 1 && b == 1 && e == undefined){
            this.line2Win();
            console.log("Line2win 2"); 
            console.log(x);
      }
      else if(g == 1 && h == 1 && i == undefined|| h == 1 && i == 1 && g == undefined|| g == 1 && i == 1 && h == undefined){
        this.line3Win();
        console.log("Line3win 1");
        console.log(x);
      }
      else if(c == 1 && f == 1 && i == undefined|| f == 1 && i == 1 && c == undefined|| c == 1 && i == 1 && f == undefined){
        this.line3Win();
        console.log("Line3win 2");
        console.log(x);
      }
      else if(a == 1 && e == 1 && i == undefined|| e == 1 && i == 1 && a == undefined|| a == 1 && i == 1 && e == undefined){
        console.log("dig1win -- step 1");
        console.log(x);
        if (x == 2 || x == 4 || x == 6 || x == 8 || x == 10) {
          this.dig1Win();
          console.log("dig1win -- step 2");
          console.log(x);
          } else {
            console.log("Not Your Turn to win");
            console.log(x);
          }
      }
      else if(c == 1 && e == 1 && g == undefined|| e == 1 && g == 1 && c == undefined|| g == 1 && c == 1 && e == undefined){
        console.log("dig2win -- step 2");
        console.log(x);
        if (x == 2 || x == 4 || x == 6 || x == 8 || x == 10) {
        this.dig2Win();
        console.log("dig2win -- step 2");
        console.log(x);
        } else {
          console.log("Not Your Turn to win");
        }
      }
      else{
        console.log("No Combinatiopn Avaliable");
        this.runComputer();
      }
     
    }



defineChance(): void{
  let a = this.valuea;
  let b = this.valueb;
  let c = this.valuec;
  let d = this.valued;
  let e = this.valuee;
  let f = this.valuef;
  let g = this.valueg;
  let h = this.valueh;
  let i = this.valuei;
  let x = this.userTurn;
  let y = 9;
  console.log( a, b, c, d, e, f, g, h, i);
  if (a == 2 && b == 2 && c == undefined|| b == 2 && c == 2 && a == undefined|| a == 2 && c == 2&& b == undefined) {
        this.line1Win();
        console.log("Line1win 1");
        console.log(x);
  }
  else if(a == 2 && d == 2 && g == undefined|| g == 2 && d == 2 && a == undefined|| g == 2 && a == 2 && d == undefined){
    this.line1Win();
    console.log("Line1win 2"); 
    console.log(x);
  }
  else if(d == 2 && e == 2 && f == undefined || e == 2 && f == 2 && d == undefined || d == 2 && f == 2 && e == undefined ){
        this.line2Win();
        console.log("Line2win 1"); 
        console.log(x);
  }
  else if(b == 2 && e == 2 && h == undefined|| e == 2 && h == 2 && b == undefined|| h == 2 && b == 2 && e == undefined){
        this.line2Win();
        console.log("Line2win 2"); 
        console.log(x);
  }
  else if(g == 2 && h == 2 && i == undefined|| h == 2 && i == 2 && g == undefined|| g == 2 && i == 2 && h == undefined){
    this.line3Win();
    console.log("Line3win 1");
    console.log(x);
  }
  else if(c == 2 && f == 2 && i == undefined|| f == 2 && i == 2 && c == undefined|| c == 2 && i == 2 && f == undefined){
    this.line3Win();
    console.log("Line3win 2");
    console.log(x);
  }
  else if(a == 2 && e == 2 && i == undefined|| e == 2 && i == 2 && a == undefined|| a == 2 && i == 2 && e == undefined){
    console.log("dig1win -- step 1");
    console.log(x);
    if (x == 2 || x == 4 || x == 6 || x == 8 || x == 10) {
      this.dig1Win();
      console.log("dig1win -- step 2");
      console.log(x);
      } else {
        console.log("Not Your Turn to win");
        console.log(x);
      }
  }
  else if(c == 2 && e == 2 && g == undefined|| e == 2 && g == 2 && c == undefined|| g == 2 && c == 2 && e == undefined){
    console.log("dig2win -- step 2");
    console.log(x);
    if (x == 2 || x == 4 || x == 6 || x == 8 || x == 10) {
    this.dig2Win();
    console.log("dig2win -- step 2");
    console.log(x);
    } else {
      console.log("Not Your Turn to win");
    }
  }
  else{
    console.log("No Combinatiopn Avaliable");
  }
 
}

line1Win(): void{
  let a = this.valueA;
  let b = this.valueB;
  let c = this.valueC;
  let d = this.valueD;
  let e = this.valueE;
  let f = this.valueF;
  let g = this.valueG;
  let h = this.valueH;
  let i = this.valueI;
  let y = 12;
  console.log("A value")
  console.log(a);
  console.log("B value")
  console.log(b);
  console.log("C value")
  console.log(c);
  if(b - a == 1 && c == undefined){
    this.boxc3();
  }
  else if(c - b == 1 && a == undefined){
    this.boxc1();
  }
  else if(c - a == 2 && b == undefined){
    this.boxc2();
  }
  else if(d - a == 3 && g == undefined){
    this.boxc7();
  }
  else if(g - d == 3 && a == undefined){
    this.boxc1();
  }
  else if(g - a == 6 && d == undefined){
    this.boxc4();
  }
  else if(g - a == 6 && d == undefined){
    this.boxc4();
  }
}

line2Win(): void{
  let a = this.valueA;
  let b = this.valueB;
  let c = this.valueC;
  let d = this.valueD;
  let e = this.valueE;
  let f = this.valueF;
  let g = this.valueG;
  let h = this.valueH;
  let i = this.valueI;
  let y = 12;
  console.log("A value")
  console.log(a);
  console.log("B value")
  console.log(b);
  console.log("C value")
  console.log(c);
  if(e - d == 1 && f == undefined){
    this.boxc6();
  }
  else if(f - e == 1 && d == undefined){
    this.boxc4();
  }
  else if(f - d == 2 && e == undefined){
    this.boxc5();
  }
  else if(e - b == 3 && h == undefined){
    this.boxc8();
  }
  else if(h - e == 3 && b == undefined){
    this.boxc2();
  }
  else if(h - b == 6 && e == undefined){
    this.boxc5();
  }
  else{
    console.log("Line 2 exit");

  }
}
line3Win(): void{
  let a = this.valueA;
  let b = this.valueB;
  let c = this.valueC;
  let d = this.valueD;
  let e = this.valueE;
  let f = this.valueF;
  let g = this.valueG;
  let h = this.valueH;
  let i = this.valueI;
  let y = 12;
  console.log("A value")
  console.log(a);
  console.log("B value")
  console.log(b);
  console.log("C value")
  console.log(c);
  if(i - h == 1 && g == undefined){
    this.boxc7();
  }
  else if(h - g == 1 && i == undefined){
    this.boxc9();
  }
  else if(i - g == 2 && h == undefined){
    this.boxc8();
  }
  else if(f - c == 3 && i == undefined){
    this.boxc9();
  }
  else if(i - f == 3 && c == undefined){
    this.boxc3();
  }
  else if(i - c == 6 && f == undefined){
    this.boxc6();
}
 }

dig1Win(): void{
  let a = this.valueA;
  let b = this.valueB;
  let c = this.valueC;
  let d = this.valueD;
  let e = this.valueE;
  let f = this.valueF;
  let g = this.valueG;
  let h = this.valueH;
  let i = this.valueI;
  let y = 12;
  console.log("A value")
  console.log(a);
  console.log("B value")
  console.log(b);
  console.log("C value")
  console.log(c);
  if(e - a == 4 && i == undefined){
    this.boxc9();
  }
  else if(i - e == 4 && a == undefined){
    this.boxc1();
  }
  else if(i - a == 8 && e == undefined){
    this.boxc5();
  }
}
dig2Win(): void{
  
  console.log("k dig2 Ordered to do something");
  let a = this.valueA;
  let b = this.valueB;
  let c = this.valueC;
  let d = this.valueD;
  let e = this.valueE;
  let f = this.valueF;
  let g = this.valueG;
  let h = this.valueH;
  let i = this.valueI;
  let y = 12;
  console.log("A value");
  console.log(a);
  console.log("B value");
  console.log(b);
  console.log("C value");
  console.log(c);
  if(e - c == 2 && g == undefined){
    this.boxc7();
  }
  else if(g - e == 2 && c == undefined){
    this.boxc3();
    console.log("Not Ordered to do something");
  }
  else if(g - c == 4 && e == undefined){
    this.boxc5();
  }
  else{
    
    console.log("dig2 not Ordered to do something");
  }
}
// Random


randomRunCommand(): void{
  if (this.winline1Show == true) {
    console.log("Somone Wins");
  } else if (this.winline2Show == true) {
    console.log("Somone Wins");
  } else if (this.winline3Show == true) {
    console.log("Somone Wins");
  } else if (this.winline4Show == true) {
    console.log("Somone Wins");
  } else if (this.winline5Show == true) {
    console.log("Somone Wins");
  } else if (this.winline6Show == true) {
    console.log("Somone Wins");
  } else if (this.dig1Show == true) {
    console.log("Somone Wins");
  } else if (this.dig2Show == true) {
    console.log("Somone Wins");
  } else {
    this.randomRunCommandHalf();
  }
  
}

randomRunCommandHalf(): void{
  let x = this.userTurn;
  if (x == 2 || x == 4 || x == 6 || x == 8) {
    this.randomRunCommandSuccess();
    
  } else {
    
    console.log("npt x ch");
  }
}


randomRunCommandSuccess(): void{
  let a = this.valuea;
  let b = this.valueb;
  let c = this.valuec;
  let d = this.valued;
  let e = this.valuee;
  let f = this.valuef;
  let g = this.valueg;
  let h = this.valueh;
  let i = this.valuei;
  let x = this.userTurn;

  if (a == undefined) {
    this.boxc1();
  } else if(b == undefined) {
    this.boxc2();
  } else if(c == undefined) {
    this.boxc3();
  } else if(d == undefined) {
    this.boxc4();
  } else if(e == undefined) {
    this.boxc5();
  } else if(f == undefined) {
    this.boxc6();
  } else if(g == undefined) {
    this.boxc7();
  } else if(h == undefined) {
    this.boxc8();
  } else if(i == undefined) {
    this.boxc9();
  }
}



  }
  