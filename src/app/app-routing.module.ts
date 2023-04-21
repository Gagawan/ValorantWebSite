import { Component, NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentComponent } from './modules/agent/agent.component';
import { MapComponent } from './modules/map/map.component';
import { HomeComponent } from './modules/home/home.component';
import { GamesComponent } from './modules/games/games.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'agent/:id', component: AgentComponent},
  { path: 'map', component: MapComponent},
  { path: 'games', component: GamesComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
