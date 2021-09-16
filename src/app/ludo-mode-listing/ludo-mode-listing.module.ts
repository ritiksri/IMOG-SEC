import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LudoModeListingPageRoutingModule } from './ludo-mode-listing-routing.module';

import { LudoModeListingPage } from './ludo-mode-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LudoModeListingPageRoutingModule
  ],
  declarations: [LudoModeListingPage]
})
export class LudoModeListingPageModule {}
