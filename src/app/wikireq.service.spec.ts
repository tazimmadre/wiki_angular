import { TestBed } from '@angular/core/testing';

import { WikireqService } from './wikireq.service';

describe('WikireqService', () => {
  let service: WikireqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WikireqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
