import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDirective } from './directives/book.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BookDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BookDirective,
    FormsModule
  ]
})
export class SharedModule { }
