import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './books-list/books-list.component';
import { SharedModule } from '../shared/shared.module';
import { BooksListItemComponent } from '../books-list-item/books-list-item.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BooksListComponent,
    BooksListItemComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    BooksListComponent
  ]
})
export class BooksModule { }
