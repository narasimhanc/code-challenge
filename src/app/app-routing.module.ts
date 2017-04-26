import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { MovieComponent } from './movie/movie.component';
import { MovieCreditsComponent } from './movie-credits/movie-credits.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
    
  },
   {
    path: 'movie',
    component: MovieComponent
    
  }, {
    path: 'cast/:id',
    component: MovieCreditsComponent
    
  },
   {
    path: 'game',
    component: GameComponent
    
  },
  
   { path: '',   redirectTo: '/home',pathMatch: 'full'}

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule { }
