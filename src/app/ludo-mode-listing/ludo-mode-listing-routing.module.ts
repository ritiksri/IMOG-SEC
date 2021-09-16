import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LudoModeListingPage } from './ludo-mode-listing.page';

const routes: Routes = [
  {
    path: '',
    component: LudoModeListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LudoModeListingPageRoutingModule {}
