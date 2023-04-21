import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Route, Router, UrlTree } from '@angular/router';
import { Observable, from, of } from 'rxjs';
import { UsersService } from './users.service';

import { User } from 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  connectedUser? : User; 

  constructor(
    private userService: UsersService,
    private router: Router
  ) { }

  connect(email?: string, password?: string) : Observable<boolean> {
    if (!email || !password){
      return of(false);
    }

    return of(true);
  }

  canActivate() : boolean | UrlTree {
    return this.connectedUser ? true : this.router.parseUrl('/login')
  }

  
}

