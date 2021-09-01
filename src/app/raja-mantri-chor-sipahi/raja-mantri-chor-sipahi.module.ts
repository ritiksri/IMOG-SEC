import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { RajaMantriChorSipahiPageRoutingModule } from './raja-mantri-chor-sipahi-routing.module';

import { RajaMantriChorSipahiPage } from './raja-mantri-chor-sipahi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RajaMantriChorSipahiPageRoutingModule
  ],
  declarations: [RajaMantriChorSipahiPage]
})
export class RajaMantriChorSipahiPageModule {}
