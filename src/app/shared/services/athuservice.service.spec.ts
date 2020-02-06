import { TestBed } from '@angular/core/testing';

import { AthuserviceService } from './athuservice.service';

describe('AthuserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AthuserviceService = TestBed.get(AthuserviceService);
    expect(service).toBeTruthy();
  });
});
