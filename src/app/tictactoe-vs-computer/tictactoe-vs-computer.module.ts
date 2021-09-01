import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TictactoeVsComputerPageRoutingModule } from './tictactoe-vs-computer-routing.module';

import { TictactoeVsComputerPage } from './tictactoe-vs-computer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TictactoeVsComputerPageRoutingModule
  ],
  declarations: [TictactoeVsComputerPage]
})
export class TictactoeVsComputerPageModule {}
