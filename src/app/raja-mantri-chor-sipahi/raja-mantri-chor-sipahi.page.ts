import { Component, OnInit } from '@angular/core';
import { RajaMantriChorSipahiService } from './raja-mantri-chor-sipahi.service';

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
  getAll: any;
  chittoggle = false;

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

}
