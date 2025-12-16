import { TestBed } from '@angular/core/testing';

import { Dynamic } from './dynamic';

describe('Dynamic', () => {
  let service: Dynamic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dynamic);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
