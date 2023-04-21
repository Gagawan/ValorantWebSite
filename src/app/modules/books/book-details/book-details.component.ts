import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { Book } from 'src/app/models';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit, OnDestroy {
  subscriptions = new Subscription(); 
  book!: Book; 

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
    ) {}

  ngOnDestroy(): void {

    
  }
  
  ngOnInit(): void {
    this.subscriptions.add(
      this.route.paramMap.pipe(
        switchMap((params) => this.bookService.getBooks(+(params.get('id') || 1)))
      ).subscribe(
        {
          next:(book: Book) => {this.book = book}, 
          error:(err) => {console.log(err);} 
        }
      ));
  }
}
