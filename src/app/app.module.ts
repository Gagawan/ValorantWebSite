import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AgentComponent } from './modules/agent/agent.component';
import { MapComponent } from './modules/map/map.component';
import { HomeComponent } from './modules/home/home.component';
import { GamesComponent } from './modules/games/games.component';

@NgModule({
  declarations: [
    AppComponent,
    AgentComponent,
    MapComponent,
    HomeComponent,
    GamesComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
