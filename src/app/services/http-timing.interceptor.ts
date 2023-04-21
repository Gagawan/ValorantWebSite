import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class HttpTimingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('HttpTimingInterceptor inercept');
    const started = performance.now();

    const res = next.handle(request).pipe(
      tap((res) => {
        const stopped = performance.now();
        console.log('HttpTimingInterceptor time', res, stopped - started);
      })
    ); 

    

    return next.handle(request);
  }
}
