import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TictactoeMultiplayerPageRoutingModule } from './tictactoe-multiplayer-routing.module';

import { TictactoeMultiplayerPage } from './tictactoe-multiplayer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TictactoeMultiplayerPageRoutingModule
  ],
  declarations: [TictactoeMultiplayerPage]
})
export class TictactoeMultiplayerPageModule {}
