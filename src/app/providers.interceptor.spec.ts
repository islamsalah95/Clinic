import { TestBed } from '@angular/core/testing';

import { ProvidersInterceptor } from './providers.interceptor';

describe('ProvidersInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ProvidersInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ProvidersInterceptor = TestBed.inject(ProvidersInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
