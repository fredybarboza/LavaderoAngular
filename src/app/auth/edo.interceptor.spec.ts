import { TestBed } from '@angular/core/testing';

import { EdoInterceptor } from './edo.interceptor';

describe('EdoInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      EdoInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: EdoInterceptor = TestBed.inject(EdoInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
