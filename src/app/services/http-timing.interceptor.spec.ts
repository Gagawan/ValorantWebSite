import { TestBed } from '@angular/core/testing';

import { HttpTimingInterceptor } from './http-timing.interceptor';

describe('HttpTimingInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpTimingInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpTimingInterceptor = TestBed.inject(HttpTimingInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
