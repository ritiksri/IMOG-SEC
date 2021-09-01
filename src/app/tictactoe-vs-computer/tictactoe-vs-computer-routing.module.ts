import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TictactoeVsComputerPage } from './tictactoe-vs-computer.page';

const routes: Routes = [
  {
    path: '',
    component: TictactoeVsComputerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TictactoeVsComputerPageRoutingModule {}
