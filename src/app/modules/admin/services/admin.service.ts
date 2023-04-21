import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models';
import { Author } from 'src/app/models/author';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  static readonly bookBaseURL = 'http://localhost:3000/books';

  constructor(private http: HttpClient) { }

  createBook(book: Book): Observable<Book>{
    return this.http.post<Book>(AdminService.bookBaseURL, book); 
  }

  createAuthor(author: Author): Observable<Author>{
    return this.http.post<Author>(AdminService.bookBaseURL, author)
  }

}
