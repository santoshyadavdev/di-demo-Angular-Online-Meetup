import { TestBed } from '@angular/core/testing';

import { DependentService } from './dependent.service';

describe('DependentService', () => {
  let service: DependentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DependentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
