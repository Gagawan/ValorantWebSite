import { Component, NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from './modules/books/books-list/books-list.component';
import { BookDetailsComponent } from './modules/books/book-details/book-details.component';
import { NewAuthorComponentComponent } from './modules/admin/new-author-component/new-author-component.component';
import { AdminComponentComponent } from './modules/admin/admin-component/admin-component.component';
import { ERComponent } from './modules/er/er.component';
import { AgentComponent } from './modules/agent/agent.component';
import { LoginComponent } from './modules/core/components/login/login.component';
import { MapComponent } from './modules/map/map.component';

const routes: Routes = [
  { path: 'books', component: BooksListComponent },
  { path: 'books/:id', component: BookDetailsComponent },
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
  { path: 'testApi', component: ERComponent},
  { path: 'agent/:id', component: AgentComponent},
  { path: 'map', component: MapComponent},
  { path: 'login', component: LoginComponent},  
  { path: '', redirectTo: 'testApi', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
