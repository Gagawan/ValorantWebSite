import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { NewBookComponentComponent } from './new-book-component/new-book-component.component';
import { NewAuthorComponentComponent } from './new-author-component/new-author-component.component';

const routes: Routes = [
  { 
    path: '',
    component: AdminComponentComponent,
    children: [
      { path: 'newbook', component: NewBookComponentComponent },
      { path: 'newauthor', component: NewAuthorComponentComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
