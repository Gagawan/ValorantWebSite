import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NewBookComponentComponent } from './new-book-component/new-book-component.component';
import { NewAuthorComponentComponent } from './new-author-component/new-author-component.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { SharedModule } from '../shared/shared.module';
import { AdminService } from './services/admin.service';


@NgModule({
  declarations: [
    NewBookComponentComponent,
    NewAuthorComponentComponent,
    AdminComponentComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  providers: [
    AdminService
  ]
})
export class AdminModule { }
