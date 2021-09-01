import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RajaMantriChorSipahiPage } from './raja-mantri-chor-sipahi.page';

const routes: Routes = [
  {
    path: '',
    component: RajaMantriChorSipahiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RajaMantriChorSipahiPageRoutingModule {}
