import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TictactoeModeListingPageRoutingModule } from './tictactoe-mode-listing-routing.module';

import { TictactoeModeListingPage } from './tictactoe-mode-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TictactoeModeListingPageRoutingModule
  ],
  declarations: [TictactoeModeListingPage]
})
export class TictactoeModeListingPageModule {}
