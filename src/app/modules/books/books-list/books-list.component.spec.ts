import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksListComponent } from './books-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { of } from 'rxjs';

describe('BooksListComponent', () => {
  let component: BooksListComponent;
  let fixture: ComponentFixture<BooksListComponent>;

  const mockBook: Book = {
    id:1,
    title: 'TITLE',
    author: 'AUTHOR',
    resume: 'RESUME'
  }; 
  const mockBookService = jasmine.createSpyObj('BookService', {
    getBook: of(mockBook)
  }); 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksListComponent ],
      providers: [{provide: BookService, useValue: mockBookService}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*
  fit('should display the book title and author', () => {  
    const el = fixture.nativeElement as HTMLElement;
    const { title, author } = component.book;

    expect(el.querySelector('[data-testid="title"]')?.textContent).toContain(title);
    expect(el.querySelector('[data-testid="author"]')?.textContent).toContain(author);
  })
  */
});
