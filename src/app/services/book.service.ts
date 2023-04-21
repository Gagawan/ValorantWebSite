import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  static readonly baseUrl = `${environment.apiUrl}/books`;

  constructor(private http: HttpClient) { }

  getBooks(id: number) : Observable<Book>{
    return this.http.get<Book>(`${BookService.baseUrl}/${id}`);
  }

  getBook() : Observable<Book[]>{
    return this.http.get<Book[]>(BookService.baseUrl);
  }

}
