import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';

describe('BookService', () => {
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /*
  it('should call the right route to get the books', () => {
    service.getBook().subscribe((books) =>
      expect(books).toEqual(mockBooks));
  });
  */
 
});
