import { TestBed } from '@angular/core/testing';

import { RollStorageService } from './roll-storage.service';

describe('RollStorageService', () => {
  let service: RollStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RollStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
