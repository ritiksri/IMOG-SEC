import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TictactoeModeListingPage } from '../tictactoe-mode-listing/tictactoe-mode-listing.page';

import { TictactoeMultiplayerPage } from './tictactoe-multiplayer.page';

const routes: Routes = [
  {
    path: '',
    component: TictactoeMultiplayerPage
  },
  {
    path: 'tictactoe-mode-listing',
    component: TictactoeModeListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TictactoeMultiplayerPageRoutingModule {}
