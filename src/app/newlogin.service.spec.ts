import { TestBed } from '@angular/core/testing';

import { NewloginService } from './newlogin.service';

describe('NewloginService', () => {
  let service: NewloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
