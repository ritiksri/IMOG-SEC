import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LudoMultiplayerGamePageRoutingModule } from './ludo-multiplayer-game-routing.module';

import { LudoMultiplayerGamePage } from './ludo-multiplayer-game.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LudoMultiplayerGamePageRoutingModule
  ],
  declarations: [LudoMultiplayerGamePage]
})
export class LudoMultiplayerGamePageModule {}
