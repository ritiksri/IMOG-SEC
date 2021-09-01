import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TictactoePassPassPage } from './tictactoe-pass-pass.page';

const routes: Routes = [
  {
    path: '',
    component: TictactoePassPassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TictactoePassPassPageRoutingModule {}
