import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksListComponent } from './modules/books/books-list/books-list.component';
import { BooksModule } from './modules/books/books.module';
import { BookDirective } from './modules/shared/directives/book.directive';
import { BooksListItemComponent } from './modules/books-list-item/books-list-item.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpTimingInterceptor } from './services/http-timing.interceptor';
import { ERComponent } from './modules/er/er.component';
import { AgentComponent } from './modules/agent/agent.component';
import { CoreModule } from './modules/core/core.module';
import { MapComponent } from './modules/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    ERComponent,
    AgentComponent,
    MapComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BooksModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpTimingInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
