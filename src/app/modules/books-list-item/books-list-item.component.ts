import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models';

@Component({
  selector: 'app-books-list-item',
  templateUrl: './books-list-item.component.html',
  styleUrls: ['./books-list-item.component.scss']
})
export class BooksListItemComponent {
  @Input() b!: Book; 
  @Output() authorClicked = new EventEmitter<string>();

  handleClick() {
    this.authorClicked.emit(this.b.author)
    this.b.author = this.b.author;
}}
