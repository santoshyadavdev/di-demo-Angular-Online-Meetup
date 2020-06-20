import { TestBed } from '@angular/core/testing';

import { NewdependentService } from './newdependent.service';

describe('NewdependentService', () => {
  let service: NewdependentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewdependentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
