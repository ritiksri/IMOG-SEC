import { Component, OnInit } from '@angular/core';
import { TictactoeMultiplayerService } from './tictactoe-multiplayer.service';
import { List } from './List';
import { Router, Routes } from '@angular/router';
import { TictactoeModeListingPage } from '../tictactoe-mode-listing/tictactoe-mode-listing.page';

@Component({
  selector: 'app-tictactoe-multiplayer',
  templateUrl: './tictactoe-multiplayer.page.html',
  styleUrls: ['./tictactoe-multiplayer.page.scss'],
})



export class TictactoeMultiplayerPage implements OnInit {
  public showGameBoard = false;
  public showSelectTurnMode = true;
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
  public valueA = 0;
  public valueB= 0;
  public valueC= 0;
  public valueD= 0;
  public valueE= 0;
  public valueF= 0;
  public valueG= 0;
  public valueH= 0;
  public valueI= 0;
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
  public createCodeVar = false;
  public line1 = false;
  public line2 = false;
  public line3 = false;
  public dig1 = false;
  public dig = false;
  public cars1: any;
  public cars: any;
  public addBox: List =  {
    id: 0,
  user1_name: '',
  user2_name: '',
  box1: 0,
  box2: 0,
  box3: 0,
  box4: 0,
  box5: 0,
  box6: 0,
  box7: 0,
  box8: 0,
  box9: 0,
  chance: 1,
   };
  addBoxVal: List[] = [];
  public values: any;
  public gameselected: any;
  gameid: number;
  user1: any;
  user2: any;
  public joinCodeVar = false;
chance: number;
public createkiyahumai = false;
public joinkiyahumai = false;
public khelkhatam = false;
public controlkaro = false;
  sessionname: string;
  public joinkarliyasyd = false;
  constructor(private listService: TictactoeMultiplayerService, private router: Router  ) { }

  ngOnInit() {
    // this.gameDraw();
    
  }
// Joining and creating
createCode(): void{
  this.createCodeVar = true;
  this.showSelectTurnMode = false;
  
this.khelkhatam = false;
this.controlkaro = false;
  this.addCar();
  setTimeout(()=>{   
    this.getCars2();
  }, 100);
  setTimeout(()=>{   
    this.getCars2();
  }, 200);
  setTimeout(()=>{   
    this.getCars2();
  }, 300);
  setTimeout(()=>{   
  this.updateChance();
  }, 400);
  this.userTurn = 2;
  this.createkiyahumai = true;
}
joinCode(): void{
this.joinCodeVar = true;
this.showSelectTurnMode = false;
this.createCodeVar = false;
this.joinkiyahumai = true;
setTimeout(()=>{   
this.updateChance();
}, 200);
}
startGame(): void{
  this.createCodeVar = false;
  this.joinCodeVar = false;
  this.showSelectTurnMode = false;
  this.showGameBoard = true;
  this.updateChance();
}
showId(): void{
  // console.log(this.gameid);
  // console.log(this.user2);
  this.createCodeVar = false;
  this.joinkarliyasyd = true;
this.joinCodeVar = false;
 
  this.updateCar2();

setTimeout(()=>{   
  this.getCars(); this.tictactoeWinChancesCROSS();
}, 2000);

}



  // Codes For Server
  getCars(): void {
    
    console.log("yha pr hu 2");
    console.log(this.controlkaro)
    console.log(this.khelkhatam)
if (this.khelkhatam == false) {
  if (this.controlkaro == false) {
    
 
    console.log("yha pr hu bhaiwdwd");


    this.listService.getAll().subscribe((data: List) => { 
        console.log("yha pr hu bhai xxx");
        this.cars = data;
        // let [gameselect, hogya ] = this.cars;
        // this.gameselected = gameselect;
        // // console.log(this.gameselected);
        // let {gameip, nhihua} = gameselect;
         
        // this.gameid = gameselect.id; 
        // this.user1 = gameselect.user1_name;
        // this.user2 = gameselect.user2_name; 
        // this.valueA = gameselect.box1; 
        // this.valueB = gameselect.box1; 
        // this.valueC = gameselect.box1; 
        // this.valueD = gameselect.box1; 
        const result = this.cars.find( ({ id }) => id === this.gameid );
        this.gameselected = result;
        // console.log(result) 
        this.gameid = this.gameselected.id; 
        this.user1 = this.gameselected.user1_name;
        this.user2 = this.gameselected.user2_name; 
        // this.valueE = gameselect.box1; 
        // this.valueF = gameselect.box1; 
        // this.valueG = gameselect.box1; 
        // this.valueH = gameselect.box1; 
        // this.valueI = gameselect.box1;
        // let userChance: number = gameselect.chance;
        // this.userTurn = userChance;
        console.log(this.gameid);
        // console.log(this.gameselected.box5);
        this.updateimage();
        this.turndecide();
        this.tictactoeWinChancesCROSS();
      },
      (err: string) => {
        console.log("errhhh");
      }
    );
  } else {
    console.log("mat aao kabhi ghr par")
  }
  } else {
  console.log("aao kabhi ghr par")
  }
  }

  getCars2(): void {
        console.log("yha pr hu getcar2");
        console.log("yha pr hu bhai ab");
        this.listService.getAll().subscribe((data: any) => {
        this.cars = data;
        console.log(this.cars);
        console.log("yha pr hu bhai ab");
        let [gameselect, hogya ] = this.cars;
        // this.gameselected = gameselect;
        // // console.log(this.gameselected);
        // let {gameip, nhihua} = gameselect;
         
        this.gameid = gameselect.id; 
        
        console.log(this.gameid);
        // this.user1 = this.gameselected.user1_name;
        // this.user2 = this.gameselected.user2_name; 
        // this.valueA = gameselect.box1; 
        // this.valueB = gameselect.box1; 
        // this.valueC = gameselect.box1; 
        // this.valueD = gameselect.box1; 
        // const result = this.cars.find( ({ id }) => id === '183' );

        // console.log(result) 
        // this.valueE = gameselect.box1; 
        // this.valueF = gameselect.box1; 
        // this.valueG = gameselect.box1; 
        // this.valueH = gameselect.box1; 
        // this.valueI = gameselect.box1;
        // let userChance: number = gameselect.chance;
        // this.userTurn = userChance;
        // console.log(this.gameid);
        // console.log(this.gameselected.box5);
        this.updateimage();
      },
      (err: string) => {
        console.log("err");
      }
    );
  }

  getCarsdis(): void {
    this.listService.getAll().subscribe((data: List) => {
        this.cars = data;
        let [gameselect, hogya ] = this.cars;
        this.gameselected = gameselect;
        // console.log(this.gameselected);
        // let {gameip, nhihua} = gameselect;
        this.gameid = gameselect.id; 
        this.user1 = gameselect.user1_name;
        this.user2 = gameselect.user2_name; 
        // console.log(this.gameid);
        // console.log(this.cars);
        this.updateimage();
      },
      (err: string) => {
        // console.log(err);
      }
    );
  }

  updateCar() {setTimeout(()=>{   
    // this.sessionname = localStorage.getItem("name");
    this.gameselected  =  {
      id: this.gameid,
    
      box1: this.valueA,
      box2: this.valueB,
      box3: this.valueC,
      box4: this.valueD,
      box5: this.valueE,
      box6: this.valueF,
      box7: this.valueG,
      box8: this.valueH,
      box9: this.valueI,
      chance: this.userTurn,
    };
    // console.log(this.valueA);
    // console.log("to update");
    // console.log(this.gameselected);
this.listService.update(this.gameselected).subscribe(
  
  (res: List) => {
    // Update the list of cars
    this.cars.push(res)

    // Inform the user
  },
);
  }, 1000);
    
  }
  updateCar2() {setTimeout(()=>{   
    this.sessionname = localStorage.getItem("name");
    this.gameselected  =  {
      id: this.gameid,
      user2_name: this.sessionname,
      box1: this.valueA,
      box2: this.valueB,
      box3: this.valueC,
      box4: this.valueD,
      box5: this.valueE,
      box6: this.valueF,
      box7: this.valueG,
      box8: this.valueH,
      box9: this.valueI,
      chance: this.userTurn,
    };
    // console.log(this.valueA);
    // console.log("to update");
    // console.log(this.gameselected);
this.listService.updatecopy(this.gameselected).subscribe(
  
  (res: List) => {
    // Update the list of cars
    this.cars.push(res)

    // Inform the user
  },
);
  }, 1000);
    
  }
  deleteCar() {   
    
    this.gameselected  =  {
      id: this.gameid,
      user1_name: this.user1,
      user2_name: this.user2,
      box1: this.valueA,
      box2: this.valueB,
      box3: this.valueC,
      box4: this.valueD,
      box5: this.valueE,
      box6: this.valueF,
      box7: this.valueG,
      box8: this.valueH,
      box9: this.valueI,
      chance: this.userTurn,
    };
    // console.log(this.valueA);
    // console.log("to update");
    // console.log(this.gameselected);
this.listService.delete(this.gameselected).subscribe(
  
  (res: List) => {
    // Update the list of cars
    this.cars.push(res);
    this.khelkhatam = false;
    this.restartGame();
    this.router.navigate(['/tictactoe-mode-listing']);
    // Inform the user
  },
);

    
  }
  addCar() {
    this.sessionname = localStorage.getItem("name");
    this.addBox  =  {
    id: undefined,
    user1_name: this.sessionname,
    user2_name: 'Waiting...',
    box1: 0,
    box2: 0,
    box3: 0,
    box4: 0,
    box5: 0,
    box6: 0,
    box7: 0,
    box8: 0,
    box9: 0,
    // box1: this.valueA,
    // box2: this.valueB,
    // box3: this.valueC,
    // box4: this.valueD,
    // box5: this.valueE,
    // box6: this.valueF,
    // box7: this.valueG,
    // box8: this.valueH,
    // box9: this.valueI,
    chance: 1,
  };
    // console.log("value add hogi syd");
    this.listService.store(this.addBox).subscribe(
      (res: List) => {
        // Update the list of cars
        this.addBoxVal.push(res)},);
        
  }
  
  // Continue Chance Updating 30sec
  updateChance(): void{
    // console.log(this.cars);
    this.getCars();
    setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 500);
    setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 1000);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 1500);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 2000);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 2500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 3000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 3500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 4000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 4500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 5000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 5500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 6000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 6500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 7000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
      
    }, 7500);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 8000);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 8500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 9000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 9500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 10000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 10500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 11000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 11500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 12000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 12500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 13000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 13500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 14000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 14500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
      
    }, 15000);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 15500);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 16000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 16500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 17000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 17500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 18000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 18500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 19000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 19500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 20000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 20500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 21000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 21500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 22000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
      
    }, 22500);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 23000);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 23500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 24000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 24500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 25000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 25500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 26000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 26500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 27000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 27500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 28000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 28000);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 28500);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 29000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
      this.updateChance2();
    }, 29500);
  }
  updateChance2(): void{
    // console.log(this.cars);
    this.getCars();
    setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 500);
    setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 1000);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 1500);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 2000);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 2500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 3000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 3500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 4000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 4500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 5000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 5500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 6000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 6500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 7000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
      
    }, 7500);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 8000);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 8500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 9000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 9500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 10000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 10500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 11000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 11500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 12000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 12500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 13000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 13500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 14000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 14500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
      
    }, 15000);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 15500);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 16000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 16500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 17000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 17500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 18000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 18500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 19000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 19500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 20000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 20500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 21000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 21500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 22000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
      
    }, 22500);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 23000);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 23500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 24000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 24500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 25000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 25500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 26000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 26500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 27000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 27500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 28000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 28000);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 28500);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 29000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
      
      this.updateChance2();
    }, 29500);
  }
  updateChance3(): void{
    // console.log(this.cars);
    this.getCars();
    setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 500);
    setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 1000);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 1500);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 2000);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 2500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 3000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 3500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 4000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 4500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 5000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 5500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 6000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 6500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 7000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
      
    }, 7500);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 8000);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 8500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 9000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 9500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 10000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 10500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 11000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 11500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 12000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 12500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 13000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 13500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 14000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 14500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
      
    }, 15000);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 15500);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 16000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 16500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 17000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 17500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 18000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 18500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 19000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 19500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 20000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 20500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 21000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 21500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 22000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
      
    }, 22500);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 23000);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 23500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 24000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 24500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 25000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 25500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 26000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 26500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 27000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 27500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 28000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 28000);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 28500);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 29000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
      this.updateChance4();
    }, 29500);
  }
  updateChance4(): void{
    // console.log(this.cars);
    this.getCars();
    setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 500);
    setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 1000);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 1500);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 2000);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 2500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 3000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 3500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 4000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 4500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 5000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 5500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 6000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 6500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 7000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
      
    }, 7500);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 8000);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 8500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 9000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 9500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 10000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 10500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 11000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 11500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 12000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 12500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 13000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 13500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 14000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 14500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
      
    }, 15000);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 15500);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 16000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 16500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 17000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 17500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 18000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 18500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 19000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 19500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 20000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 20500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 21000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 21500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 22000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
      
    }, 22500);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 23000);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 23500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 24000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 24500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 25000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 25500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 26000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 26500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 27000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 27500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 28000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 28000);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 28500);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 29000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
      
      this.updateChance5();
    }, 29500);
  }updateChance5(): void{
    // console.log(this.cars);
    this.getCars();
    setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 500);
    setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 1000);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 1500);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 2000);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 2500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 3000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 3500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 4000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 4500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 5000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 5500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 6000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 6500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 7000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
      
    }, 7500);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 8000);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 8500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 9000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 9500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 10000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 10500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 11000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 11500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 12000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 12500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 13000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 13500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 14000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 14500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
      
    }, 15000);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 15500);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 16000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 16500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 17000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 17500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 18000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 18500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 19000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 19500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 20000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 20500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 21000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 21500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 22000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
      
    }, 22500);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 23000);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 23500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 24000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 24500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 25000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 25500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 26000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 26500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 27000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 27500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 28000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 28000);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 28500);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 29000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
      
      this.updateChance6();
    }, 29500);
  }updateChance6(): void{
    // console.log(this.cars);
    this.getCars();
    setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 500);
    setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 1000);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 1500);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 2000);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 2500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 3000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 3500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 4000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 4500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 5000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 5500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 6000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 6500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 7000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
      
    }, 7500);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 8000);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 8500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 9000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 9500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 10000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 10500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 11000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 11500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 12000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 12500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 13000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 13500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 14000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 14500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
      
    }, 15000);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 15500);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 16000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 16500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 17000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 17500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 18000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 18500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 19000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 19500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 20000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 20500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 21000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 21500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 22000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
      
    }, 22500);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 23000);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 23500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 24000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 24500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 25000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 25500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 26000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 26500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 27000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 27500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 28000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 28000);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 28500);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 29000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
      
      this.updateChance7();
    }, 29500);
  }updateChance7(): void{
    // console.log(this.cars);
    this.getCars();
    setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 500);
    setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 1000);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 1500);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 2000);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 2500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 3000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 3500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 4000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 4500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 5000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 5500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 6000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 6500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 7000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
      
    }, 7500);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 8000);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 8500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 9000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 9500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 10000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 10500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 11000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 11500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 12000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 12500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 13000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 13500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 14000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 14500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
      
    }, 15000);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 15500);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 16000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 16500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 17000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 17500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 18000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 18500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 19000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 19500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 20000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 20500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 21000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 21500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 22000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
      
    }, 22500);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 23000);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 23500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 24000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 24500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 25000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 25500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 26000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 26500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 27000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 27500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 28000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 28000);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 28500);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 29000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
      
      this.updateChance8();
    }, 29500);
  }updateChance8(): void{
    // console.log(this.cars);
    this.getCars();
    setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 500);
    setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 1000);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 1500);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 2000);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 2500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 3000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 3500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 4000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 4500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 5000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 5500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 6000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 6500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 7000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
      
    }, 7500);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 8000);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 8500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 9000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 9500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 10000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 10500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 11000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 11500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 12000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 12500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 13000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 13500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 14000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 14500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
      
    }, 15000);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 15500);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 16000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 16500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 17000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 17500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 18000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 18500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 19000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 19500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 20000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 20500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 21000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 21500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 22000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
      
    }, 22500);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 23000);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 23500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 24000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 24500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 25000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 25500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 26000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 26500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 27000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 27500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 28000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 28000);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 28500);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 29000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
      
      this.updateChance9();
    }, 29500);
  }updateChance9(): void{
    // console.log(this.cars);
    this.getCars();
    setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 500);
    setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 1000);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 1500);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 2000);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 2500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 3000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 3500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 4000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 4500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 5000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 5500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 6000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 6500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 7000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
      
    }, 7500);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 8000);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 8500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 9000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 9500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 10000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 10500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 11000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 11500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 12000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 12500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 13000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 13500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 14000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 14500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
      
    }, 15000);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 15500);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 16000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 16500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 17000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 17500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 18000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 18500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 19000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 19500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 20000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 20500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 21000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 21500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 22000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
      
    }, 22500);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 23000);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 23500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 24000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 24500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 25000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 25500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 26000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 26500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 27000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 27500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 28000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 28000);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 28500);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 29000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
      
      this.updateChance10();
    }, 29500);
  }updateChance10(): void{
    // console.log(this.cars);
    this.getCars();
    setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 500);
    setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 1000);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 1500);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 2000);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 2500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 3000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 3500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 4000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 4500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 5000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 5500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 6000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 6500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 7000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
      
    }, 7500);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 8000);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 8500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 9000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 9500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 10000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 10500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 11000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 11500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 12000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 12500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 13000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 13500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 14000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 14500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
      
    }, 15000);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 15500);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 16000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 16500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 17000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 17500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 18000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 18500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 19000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 19500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 20000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 20500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 21000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 21500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 22000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
      
    }, 22500);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 23000);
    setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 23500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 24000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 24500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 25000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 25500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 26000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 26500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 27000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 27500);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 28000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
    }, 28000);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 28500);setTimeout(()=>{   
      this.getCars();
      // // console.log(this.cars);
    }, 29000);setTimeout(()=>{   
      this.getCars();
      // console.log(this.cars);
      
    }, 29500);
  }
  updateimage(): void{
    // console.log("value of 1")
    // console.log(this.gameselected.box1);
    // console.log("value of 2")
    // console.log(this.gameselected.box2);
    // console.log("value of 3")
    // console.log(this.gameselected.box3);
    // console.log("value of 4")
    // console.log(this.gameselected.box4);
    // console.log("value of 5")
    // console.log(this.gameselected.box5);
    // console.log("value of 6")
    // console.log(this.gameselected.box6);
    // console.log("value of 7")
    // console.log(this.gameselected.box7);
    // console.log("value of 8")
    // console.log(this.gameselected.box8);
    // console.log("value of 9")
    // console.log(this.gameselected.box9);
    // console.log("value of end")


      if (this.gameselected.box1 == 2) {
        // console.log(this.gameselected.box1);
        this.crosstap1();
      } else{console.log(" next please")}
       if (this.gameselected.box2 == 3) {
        this.crosstap2();
      }else {console.log(" next please")}
      if (this.gameselected.box3 == 4) {
        this.crosstap3();
      } else{console.log(" next please")}
       if (this.gameselected.box4 == 5) {
        this.crosstap4();
      }else {console.log(" next please")}
      if (this.gameselected.box5 == 6) {
        this.crosstap5();
      }else {console.log(" next please")}
      if (this.gameselected.box6 == 7) {
        this.crosstap6();
      }else {console.log(" next please")}
      if (this.gameselected.box7 == 8) {
        this.crosstap7();
      }else {console.log(" next please")}
      if (this.gameselected.box8 == 9) {
        this.crosstap8();
      }else {console.log(" next please")}
      if (this.gameselected.box9 == 10) {
        this.crosstap9();
      }else {console.log(" next please")}
      if (this.gameselected.box1 == 3) {
        this.circletap1();
      } else {console.log(" next please")}
      if (this.gameselected.box2 == 4) {
        this.circletap2();
      }else {console.log(" next please")}
      if (this.gameselected.box3 == 5) {
        this.circletap3();
      } else {console.log(" next please")}
      if (this.gameselected.box4 == 6) {
        this.circletap4();
      }else {console.log(" next please")}
      if (this.gameselected.box5 == 7) {
        this.circletap5();
      }else {console.log(" next please")}
      if (this.gameselected.box6 == 8) {
        this.circletap6();
      }else {console.log(" next please")}
      if (this.gameselected.box7 == 9) {
        this.circletap7();
      }else {console.log(" next please")}
      if (this.gameselected.box8 == 10) {
        this.circletap8();
      }else {console.log(" next please")}
      if (this.gameselected.box9 == 11) {
        this.circletap9();
      }else {
        // console.log("draw ho gya bhaiya");
      }
   
  }


  // Codes For Server End
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

turndecide(){
  let turn = this.gameselected.chance;
  if (turn == 2 || turn == 4 || turn == 6 || turn == 8 || turn == 10) {
    this.userTurnToRunFn();

  }
  else if (turn == 1 || turn == 3 || turn == 5 || turn == 7 || turn == 9 || turn == 11) {
 
    this.computerTurnToRunFn();
  }

}
    gameDraw(): void{
      
      let x = this.gameselected.chance;
      let y = 9;
      if (this.circleWin == false) {
          if (x > 10 ) {
            setTimeout(()=>{                
              this.gameDrawSuccess = true;
         }, 500);
            console.log("Game Draw")
          } else {
            // console.log("Koi Jeet GYa")
          }
      } else {
        console.log("Kon Jeeta hai ")
      }
      
    }
  
  



  // BOX TAP EVENTS

box1():void{
  let x = this.userTurn;
  let y = 9;
let a = this.valueA;
let turn =  this.gameselected.chance;
if (a < 2) {
  

  // console.log(this.userTurn);
if (x == 1 || x == 3 || x == 5 || x == 7 || x == 9){
  if (turn == 2 || turn == 4 || turn == 6 || turn == 8 || turn == 10) {
    
  this.crosstap1();
  this.updateCar();
  this.userTurn +=2
  this.updateChance();
  this.getCars();
  // console.log('x Turn success');
  this.updateCar();
  this.controlkaro = false;
  this.tictactoeWinChancesCIRCLE();
  this.tictactoeWinChancesCROSS();
  this.crossShow1 = true;
} }
else if (x == 2 || x == 4 || x == 6 || x == 8 || x == 10)
{ if (turn == 1 || turn == 3 || turn == 5 || turn == 7 || turn == 9 || turn == 11) {
 
  this.circletap1();
  this.updateCar();
  this.updateChance();
  this.getCars();
  // console.log('o turn Success');
  this.controlkaro = false;
  this.userTurn += 2;
  this.tictactoeWinChancesCIRCLE();
  this.tictactoeWinChancesCROSS();
  this.circleShow1 = true;
}}
else if (x > y) 
{
  // console.log('Invalid ');
}} else {
   // console.log('Invalid ');
}
}

box2():void{
  let x = this.userTurn;
  let y = 9;
  let a = this.valueB;
  let turn =  this.gameselected.chance;
  if (a < 3) {
  // console.log(this.userTurn);
if (x == 1 || x == 3 || x == 5 || x == 7 || x == 9){
  if (turn == 2 || turn == 4 || turn == 6 || turn == 8 || turn == 10) {
   
  this.crosstap2();
  this.updateCar();
  this.userTurn +=2
  this.updateChance();
  this.getCars();
  // console.log('x Turn success');
  this.controlkaro = false;
  this.tictactoeWinChancesCIRCLE();
  this.tictactoeWinChancesCROSS();
  this.crossShow2 = true;
}}
else if (x == 2 || x == 4 || x == 6 || x == 8 || x == 10)
{ if (turn == 1 || turn == 3 || turn == 5 || turn == 7 || turn == 9 || turn == 11) {
  this.controlkaro = false;
  this.circletap2();
  
  this.updateCar();
  this.updateChance();
  this.getCars();
  // console.log('o turn Success');
  this.userTurn += 2;
  this.tictactoeWinChancesCIRCLE();
  this.tictactoeWinChancesCROSS();
  this.circleShow2 = true;
}}
else if (x > y) 
{
  // console.log('Invalid ');
} } else {
  // console.log('Invalid ');
}
}
box3():void{
  let x = this.userTurn;
  let y = 9;
  let a = this.valueC;
  let turn =  this.gameselected.chance;
  if (a < 4) {
  // console.log(this.userTurn);
if (x == 1 || x == 3 || x == 5 || x == 7 || x == 9){
  if (turn == 2 || turn == 4 || turn == 6 || turn == 8 || turn == 10) {
    this.controlkaro = false;
  // console.log('x Turn success');
  this.userTurn +=2
  this.updateCar();
  this.updateChance();
  this.crosstap3();
  this.getCars();
  this.tictactoeWinChancesCIRCLE();
  this.tictactoeWinChancesCROSS();
  this.crossShow3 = true;
}}
else if (x == 2 || x == 4 || x == 6 || x == 8 || x == 10)
{ if (turn == 1 || turn == 3 || turn == 5 || turn == 7 || turn == 9 || turn == 11) {
  this.controlkaro = false;
  this.circletap3();
  this.updateCar();
  this.updateChance();
  this.getCars();
  // console.log('o turn Success');
  this.userTurn += 2;
  this.tictactoeWinChancesCIRCLE();
  this.tictactoeWinChancesCROSS();
  this.circleShow3 = true;
}}
else if (x > y) 
{
  // console.log('Invalid ');
}} else {
  // console.log('Invalid ');
}
}
box4():void{
  let x = this.userTurn;
  let y = 9;

  let a = this.valueD;
  let turn =  this.gameselected.chance;
  if (a < 5) {
  // console.log(this.userTurn);
if (x == 1 || x == 3 || x == 5 || x == 7 || x == 9){
  if (turn == 2 || turn == 4 || turn == 6 || turn == 8 || turn == 10) {
    this.controlkaro = false;
  this.crosstap4();
  this.getCars();
  // console.log('x Turn success');
  this.userTurn +=2
  this.updateCar();
  this.updateChance();
  this.tictactoeWinChancesCIRCLE();
  this.tictactoeWinChancesCROSS();
  this.crossShow4 = true;
}}
else if (x == 2 || x == 4 || x == 6 || x == 8 || x == 10)
{ if (turn == 1 || turn == 3 || turn == 5 || turn == 7 || turn == 9 || turn == 11) {
  this.controlkaro = false;
  this.circletap4();
  this.getCars();
  // console.log('o turn Success');
  this.userTurn += 2;
  this.updateCar();
  this.updateChance();
  this.tictactoeWinChancesCIRCLE();
  this.tictactoeWinChancesCROSS();
  this.circleShow4 = true;
}}
else if (x > y) 
{
  // console.log('Invalid ');
}
  }
}
box5():void{
  let x = this.userTurn;
  let y = 9;

  let a = this.valueE;
  let turn =  this.gameselected.chance;
  if (a < 6) {
  // console.log(this.userTurn);
if (x == 1 || x == 3 || x == 5 || x == 7 || x == 9){
  if (turn == 2 || turn == 4 || turn == 6 || turn == 8 || turn == 10) {
    this.controlkaro = false;
  this.crosstap5();
  this.getCars();
  // console.log('x Turn success');
  this.userTurn +=2
  this.updateCar();
  this.updateChance();
  this.tictactoeWinChancesCIRCLE();
  this.tictactoeWinChancesCROSS();
  this.crossShow5 = true;
}}
else if (x == 2 || x == 4 || x == 6 || x == 8 || x == 10)
{ if (turn == 1 || turn == 3 || turn == 5 || turn == 7 || turn == 9 || turn == 11) {
  this.controlkaro = false;
  this.circletap5();
  this.getCars();
  // console.log('o turn Success');
  this.userTurn += 2;
  this.updateCar();
  this.updateChance();
  this.tictactoeWinChancesCIRCLE();
  this.tictactoeWinChancesCROSS();
  this.circleShow5 = true;
}}
else if (x > y) 
{
  // console.log('Invalid ');
}}
}
box6():void{
  let x = this.userTurn;
  let y = 9;

  let a = this.valueF;
  let turn =  this.gameselected.chance;
  if (a < 7) {
  // console.log(this.userTurn);
if (x == 1 || x == 3 || x == 5 || x == 7 || x == 9)
{ 
  if (turn == 2 || turn == 4 || turn == 6 || turn == 8 || turn == 10) { 
    this.controlkaro = false;
  this.crosstap6();
  this.getCars();
  // console.log('o turn Success');
  this.userTurn += 2;
  this.updateCar();
  this.updateChance();
  this.tictactoeWinChancesCIRCLE();
  this.tictactoeWinChancesCROSS();
  this.crossShow6 = true;
}}
else if (x == 2 || x == 4 || x == 6 || x == 8 || x == 10)
{ if (turn == 1 || turn == 3 || turn == 5 || turn == 7 || turn == 9 || turn == 11) {
  this.controlkaro = false;
  this.circletap6();
  this.getCars();
  // console.log('o turn Success');
  this.userTurn += 2;
  this.updateCar();
  this.updateChance();
  this.tictactoeWinChancesCIRCLE();
  this.tictactoeWinChancesCROSS();
  this.circleShow6 = true;
}}
else if (x > y) 
{
  // console.log('Invalid ');
}}
}
box7():void{
  let x = this.userTurn;
  let y = 9;

  let a = this.valueG;
  let turn =  this.gameselected.chance;
  if (a < 8) {
  // console.log(this.userTurn);
if (x == 1 || x == 3 || x == 5 || x == 7 || x == 9){
  if (turn == 2 || turn == 4 || turn == 6 || turn == 8 || turn == 10) {
    this.controlkaro = false;
  this.crosstap7();
  this.getCars();
  // console.log('x Turn success');
  this.userTurn +=2
  this.updateCar();
  this.updateChance();
  this.tictactoeWinChancesCIRCLE();
  this.tictactoeWinChancesCROSS();
  this.crossShow7 = true;
}}
else if (x == 2 || x == 4 || x == 6 || x == 8 || x == 10)
{ if (turn == 1 || turn == 3 || turn == 5 || turn == 7 || turn == 9 || turn == 11) {
  this.controlkaro = false;
  this.circletap7();
  this.getCars();
  // console.log('o turn Success');
  this.userTurn += 2;
  this.updateCar();
  this.updateChance();
  this.tictactoeWinChancesCIRCLE();
  this.tictactoeWinChancesCROSS();
  this.circleShow7 = true;
}}
else if (x > y) 
{
  // console.log('Invalid ');
}}
}
box8():void{
  let x = this.userTurn;
  let y = 9;

  let a = this.valueH;
  let turn =  this.gameselected.chance;
  if (a < 9) {
  // console.log(this.userTurn);
if (x == 1 || x == 3 || x == 5 || x == 7 || x == 9){
  if (turn == 2 || turn == 4 || turn == 6 || turn == 8 || turn == 10) {
    this.controlkaro = false;
  this.crosstap8();
  this.getCars();
  // console.log('x Turn success');
  this.userTurn +=2
  this.updateCar();
  this.updateChance();
  this.tictactoeWinChancesCIRCLE();
  this.tictactoeWinChancesCROSS();
  this.crossShow8 = true;
}}
else if (x == 2 || x == 4 || x == 6 || x == 8 || x == 10)
{ if (turn == 1 || turn == 3 || turn == 5 || turn == 7 || turn == 9 || turn == 11) {
  this.controlkaro = false;
  this.circletap8();
  this.getCars();
  // console.log('o turn Success');
  this.userTurn += 2;
  this.updateCar();
  this.updateChance();
  this.tictactoeWinChancesCIRCLE();
  this.tictactoeWinChancesCROSS();
  this.circleShow8 = true;
}}
else if (x > y) 
{
  // console.log('Invalid ');
}}
}
box9():void{
  let x = this.userTurn;
  let y = 9;

  let a = this.valueI;
  let turn =  this.gameselected.chance;
  if (a < 10) {
  // console.log(this.userTurn);
if (x == 1 || x == 3 || x == 5 || x == 7 || x == 9){
  if (turn == 2 || turn == 4 || turn == 6 || turn == 8 || turn == 10) {
    this.controlkaro = false;
  this.crosstap9();
  this.getCars();
  this.userTurn +=2
  this.updateCar();
  this.updateChance();
  this.tictactoeWinChancesCIRCLE();
  this.tictactoeWinChancesCROSS();
  this.crossShow9 = true;
}}
else if (x == 2 || x == 4 || x == 6 || x == 8 || x == 10)
{
  if (turn == 1 || turn == 3 || turn == 5 || turn == 7 || turn == 9 || turn == 11) {
    this.controlkaro = false;
  this.circletap9();
  this.getCars();
  // console.log('o turn Success');
  this.userTurn += 2;
  this.updateCar();
  this.updateChance();
  this.tictactoeWinChancesCIRCLE();
  this.tictactoeWinChancesCROSS();
  this.circleShow9 = true;
}}
else if (x > y) 
{
  // console.log('Invalid ');
}
}}

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
this.cars1 = [];
this.cars = [];
this.addBox =  {
  id: 0,
user1_name: '',
user2_name: '',
box1: 0,
box2: 0,
box3: 0,
box4: 0,
box5: 0,
box6: 0,
box7: 0,
box8: 0,
box9: 0,
chance: 1,
 };
this.addBoxVal = [];
this.values = [];
this.gameselected = [];
this.gameid = 0;
this.user1 = [];
this.user2 = [];
this.joinCodeVar = false;
this.chance = undefined;
this.createkiyahumai = false;
this.joinkiyahumai = false;
this.khelkhatam = true;
this.controlkaro = true;
this.createCodeVar = false;
this.joinCodeVar = false;
this.showSelectTurnMode = true;
this.showGameBoard = false;
}





  // Cross Taps
  crosstap1():void{
    this.valueA = 2;
    this.crossShow1 = true;
    // console.log(this.valueA);
  }
  crosstap2():void{
    this.valueB = 3;
    this.crossShow2 = true;
    // console.log(this.valueB);
  }
  crosstap3():void{
    this.valueC = 4;
    this.crossShow3 = true;
    // console.log(this.valueC);
  }
  crosstap4():void{
    this.valueD = 5;
    this.crossShow4 = true;
    // console.log(this.valueD);
  }
  crosstap5():void{
    this.valueE = 6;
    this.crossShow5 = true;
    // console.log(this.valueE);
  }
  crosstap6():void{
    this.valueF = 7;
    this.crossShow6 = true;
    // console.log(this.valueF);
  }
  crosstap7():void{
    this.valueG = 8;
    this.crossShow7 = true;
    // console.log(this.valueG);
  }
  crosstap8():void{
    this.valueH = 9;
    this.crossShow8 = true;
    // console.log(this.valueH);
  }
  crosstap9():void{
    this.valueI = 10;
    this.crossShow9 = true
    // console.log(this.valueI);
    this.crossShow9 = true;
  }

   // Circle Taps
   circletap1():void{
    this.valueA = 3;
    this.circleShow1 = true
 
    // console.log(this.valueA);
  }
  circletap2():void{
    this.valueB = 4;
    this.circleShow2 = true
  }
  circletap3():void{
    this.valueC = 5;
    this.circleShow3 = true
    // console.log(this.valueC);
  }
  circletap4():void{
    this.valueD = 6;
    this.circleShow4 = true
    // console.log(this.valueD);
  }
  circletap5():void{
    this.valueE = 7;
    this.circleShow5 = true
    // console.log(this.valueE);
  }
  circletap6():void{
    this.valueF = 8;
    this.circleShow6 = true
    // console.log(this.valueF);
  }
  circletap7():void{
    this.valueG = 9;
    this.circleShow7 = true
    // console.log(this.valueG);
  }
  circletap8():void{
    this.valueH = 10;
    this.circleShow8 = true
    // console.log(this.valueH);
  }
  circletap9():void{
    this.valueI = 11;
  this.circleShow9 = true
    // console.log(this.valueI);
  }



//  cross Win Chance

//  cross Win Chance
tictactoeWinChancesCROSS(): void{
  let a = this.gameselected.box1;
  let b = this.gameselected.box2;
  let c = this.gameselected.box3;
  let d = this.gameselected.box4;
  let e = this.gameselected.box5;
  let f = this.gameselected.box6;
  let g = this.gameselected.box7;
  let h = this.gameselected.box8;
  let i = this.gameselected.box9;
  this.gameDraw();
  if (a == 2 && b == 3 && c == 4){
    // console.log("Cross Wins");
    this.winline1Show = true;
    this.crossWin = true;
    this.controlkaro = true;
    return;
  }
  else if (d == 5 && e == 6 && f == 7){
    // console.log("Cross Wins");
    this.winline2Show = true;
    this.crossWin = true;
    this.controlkaro = true;
    return;
  }
  else if (g == 8 && h == 9 && i == 10){
    // console.log("Cross Wins");
    this.winline3Show = true;
    this.crossWin = true;
    this.controlkaro = true;
    return;
  }
  else if (a == 2 && d == 5 && g == 8){
    // console.log("Cross Wins");
    this.winline3Show = true;
    this.crossWin = true;
    this.controlkaro = true;
    return;
  }
  else if (b == 3 && e == 6 && h == 9){
    // console.log("Cross Wins");
    this.winline5Show = true;
    this.crossWin = true;
    this.controlkaro = true;
    return;
  }
  else if (c == 4 && f == 7 && i == 10){
    // console.log("Cross Wins");
    this.winline6Show = true;
    this.crossWin = true;
    this.controlkaro = true;
    return;
  }
  else if (a == 2 && e == 6 && i == 10){
    // console.log("Cross Wins");
    this.dig2Show = true;
    this.crossWin = true;
    this.controlkaro = true;
    return;
  }
  else if (g == 8 && e == 6 && c == 4){
    // console.log("Cross Wins");
    this.dig1Show = true;
    this.crossWin = true;
    this.controlkaro = true;
    return;
  }
  else if (a == 3 && b == 4 && c == 5){
    // console.log("Circle Wins");
    this.winline1Show = true;
    this.circleWin = true;
    this.controlkaro = true;
    return;
  }
  else if (d == 6 && e == 7 && f == 8){
    // console.log("Circle Wins");
    this.winline2Show = true;
    this.circleWin = true;
    this.controlkaro = true;
    return;
  }
  else if (g == 9 && h == 10 && i == 11){
    // console.log("Circle Wins");
    this.winline3Show = true;
    this.circleWin = true;
    this.controlkaro = true;
    return;
  }
  else if (a == 3 && d == 6 && g == 9){
    // console.log("Circle Wins");
    this.winline4Show = true;
    this.circleWin = true;
    this.controlkaro = true;
    return;
  }
  else if (b == 4 && e == 7 && h == 10){
    // console.log("Circle Wins");
    this.winline5Show = true;
    this.circleWin = true;
    this.controlkaro = true;
    return;
  }
  else if (c == 5 && f == 8 && i == 11){
    // console.log("Circle Wins");
    this.winline6Show = true;
    this.circleWin = true;
    this.controlkaro = true;
    return;
  }
  else if (a == 3 && e == 7 && i == 11){
    // console.log("Circle Wins");
    this.dig2Show = true;
    this.circleWin = true;
    this.controlkaro = true;
    return;
  }
  else if (c == 5 && e == 7 && g == 9){
    // console.log("Circle Wins");
    this.dig1Show = true;
    this.circleWin = true;
    this.controlkaro = true;
    return;
  }
  else {
    this.crossLoss = true;
    this.circleLoss = true;
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



}
