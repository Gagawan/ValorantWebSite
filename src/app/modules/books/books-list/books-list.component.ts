import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent {
  book:  Book[] = []; 
  errorMessage?: string;
  subscription = new Subscription;

  constructor(private bookService: BookService){
    this.subscription.add(
      this.bookService.getBook().subscribe({
        next: books => { this.book = books; },
        error: err => this.errorMessage = err.message
    }));
  }; 

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
}


