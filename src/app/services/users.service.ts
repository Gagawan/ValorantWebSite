import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  static readonly baseUrl = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(UsersService.baseUrl)
  }

  findUser(email: string, password: string): Observable<User | undefined> {

    return this.getUsers().pipe(
      map((users) => users.find((user) => user.email === email && user.password === password))
    ); 
  }
}
