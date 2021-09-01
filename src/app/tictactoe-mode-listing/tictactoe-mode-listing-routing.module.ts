import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TictactoeModeListingPage } from './tictactoe-mode-listing.page';

const routes: Routes = [
  {
    path: '',
    component: TictactoeModeListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TictactoeModeListingPageRoutingModule {}
