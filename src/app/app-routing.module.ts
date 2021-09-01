import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: 'signup', component: SignupPage },
  // { path: 'login', component: LoginComponent },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'game-list',
    loadChildren: () => import('./game-list/game-list.module').then( m => m.GameListPageModule)
  },
  {
    path: 'tictactoe-pass-pass',
    loadChildren: () => import('./tictactoe-pass-pass/tictactoe-pass-pass.module').then( m => m.TictactoePassPassPageModule)
  },
  {
    path: 'tictactoe-mode-listing',
    loadChildren: () => import('./tictactoe-mode-listing/tictactoe-mode-listing.module').then( m => m.TictactoeModeListingPageModule)
  },
  {
    path: 'tictactoe-vs-computer',
    loadChildren: () => import('./tictactoe-vs-computer/tictactoe-vs-computer.module').then( m => m.TictactoeVsComputerPageModule)
  },
  {
    path: 'raja-mantri-chor-sipahi',
    loadChildren: () => import('./raja-mantri-chor-sipahi/raja-mantri-chor-sipahi.module').then( m => m.RajaMantriChorSipahiPageModule)
  },
  {
    path: 'tictactoe-multiplayer',
    loadChildren: () => import('./tictactoe-multiplayer/tictactoe-multiplayer.module').then( m => m.TictactoeMultiplayerPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
