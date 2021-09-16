import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LudoMultiplayerGamePage } from './ludo-multiplayer-game.page';

const routes: Routes = [
  {
    path: '',
    component: LudoMultiplayerGamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LudoMultiplayerGamePageRoutingModule {}
