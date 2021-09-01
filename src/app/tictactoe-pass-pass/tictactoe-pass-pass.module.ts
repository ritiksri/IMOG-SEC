import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TictactoePassPassPageRoutingModule } from './tictactoe-pass-pass-routing.module';

import { TictactoePassPassPage } from './tictactoe-pass-pass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TictactoePassPassPageRoutingModule
  ],
  declarations: [TictactoePassPassPage]
})
export class TictactoePassPassPageModule {}
