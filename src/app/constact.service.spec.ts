import { TestBed } from '@angular/core/testing';

import { ConstactService } from './constact.service';

describe('ConstactService', () => {
  let service: ConstactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConstactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
