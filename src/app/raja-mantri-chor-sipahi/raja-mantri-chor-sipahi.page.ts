import { Component, OnInit } from '@angular/core';
import { RajaMantriChorSipahiService } from './raja-mantri-chor-sipahi.service';
import { List } from './List';

@Component({
  selector: 'app-raja-mantri-chor-sipahi',
  templateUrl: './raja-mantri-chor-sipahi.page.html',
  styleUrls: ['./raja-mantri-chor-sipahi.page.scss'],
})
export class RajaMantriChorSipahiPage implements OnInit {
public notRoll = true;
public yesRoll = false;
public throwChit = false;
public doneRoll = false;
public cars: any;
public showOPtion = false;
public showcodeselection = true;
public startGame = false;
public showcodecreate = false;
public showcodejoin = false;
public gameselected: any;
public addBox: List =  {
  id: 0,
user1_name: '',
user2_name: '',
user3_name: '',
    user4_name: '',
    user1_card: 1,
    user2_card: 1,
    user3_card: 1,
    user4_card: 1,
    raja_input: 1,
    mantri_input: 1,
    mantri_chor: 1,
    user1_points: 1,
    user2_points: 1,
    user3_points: 1,
    user4_points: 1,
chance: 1,
 };
 addBoxVal: List[] = [];
 public gameid = 0;
  chittoggle = false;
  sessionname = "";
  user1 = "";
  user2 = "";
  user3 = "";
  user4 = "";
 public showcodejoinafter = false;

  constructor(private listService: RajaMantriChorSipahiService) { }

  ngOnInit() {
  }
roll(): void{
  this.notRoll = false;
  this.yesRoll = true;
setTimeout(()=>{ 
  this.throwChit = true;               
  this.yesRoll = false;
  this.doneRoll = true;
}, 3000);
}
chitopen(): void{
  this.chittoggle = !this.chittoggle;
}
scoreopen(): void{
  this.showOPtion = !this.showOPtion;
}
createcodeshow():void{
  this.addCar();
  this.showcodeselection = false;
  this.showcodecreate = true;
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
}
joincodeshow():void{
  this.showcodeselection = false;
  this.showcodecreate = false;
  this.showcodejoin = true;
}
showId(): void{
  this.showcodeselection = false;
  this.showcodecreate = false;
  this.showcodejoin = false;
  this.showcodejoinafter = true;
 
  this.updateCar2();
  setTimeout(()=>{   
  this.updateChance();
  }, 200);

setTimeout(()=>{   
  this.getCars();
}, 2000);

}

startGame1(): void{
  this.showcodeselection = false;
  this.showcodecreate = false;
  this.showcodejoin = false;
  this.showcodejoinafter = false;
  this.updateCar2();
  this.updateChance();
}
  // Codes For Server
  
  updateCar2() {setTimeout(()=>{   
    this.sessionname = localStorage.getItem("name");
    this.gameselected  =  {
      id: this.gameid,
      user1_name: '',
      user2_name: this.sessionname,
  user3_name: this.sessionname,
  user4_name: this.sessionname,
  user1_card: 1,
  user2_card: 1,
  user3_card: 1,
  user4_card: 1,
  raja_input: 1,
  mantri_input: 1,
  mantri_chor: 1,
  user1_points: 1,
  user2_points: 1,
  user3_points: 1,
  user4_points: 1,
  chance: 1,
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
  getCars(): void {
    this.listService.getAll().subscribe((data: List) => { 
        this.cars = data;
        const result = this.cars.find( ({ id }) => id === this.gameid );
        this.gameselected = result;
        console.log(result) 
        this.gameid = this.gameselected.id; 
        this.user1 = this.gameselected.user1_name;
        this.user2 = this.gameselected.user2_name; 
        this.user3 = this.gameselected.user3_name;
        this.user4 = this.gameselected.user4_name; 

        this.sessionname = localStorage.getItem("name"); 


        console.log(this.gameid);
      },
      (err: string) => {
        console.log("errhhh");
      }
    );
  }
addCar() {
  
  this.sessionname = localStorage.getItem("name");
  this.addBox  =  {
  id: 1,
  user1_name: this.sessionname,
  user2_name: 'Waiting..',
  user3_name: 'waiting..',
  user4_name: 'waiting..',
  user1_card: 1,
  user2_card: 1,
  user3_card: 1,
  user4_card: 1,
  raja_input: 1,
  mantri_input: 1,
  mantri_chor: 1,
  user1_points: 1,
  user2_points: 1,
  user3_points: 1,
  user4_points: 1,
  chance: 1,
};
  // console.log("value add hogi syd");
  this.listService.store(this.addBox).subscribe(
    (res: List) => {
      // Update the list of cars
      this.addBoxVal.push(res)},);
      
}

getCars2(): void {
  this.listService.getAll().subscribe((data: any) => {
  this.cars = data;
  console.log(this.cars);
  let [gameselect, hogya ] = this.cars;
   
  this.gameid = gameselect.id; 
  
  console.log(this.gameid);
},
(err: string) => {
  console.log("err");
}
);
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
}
