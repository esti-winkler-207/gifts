import { TestBed } from '@angular/core/testing';

import { ManagerSerService } from './manager-ser.service';

describe('ManagerSerService', () => {
  let service: ManagerSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
