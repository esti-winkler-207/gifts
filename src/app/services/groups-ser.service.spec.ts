import { TestBed } from '@angular/core/testing';

import { GroupsSerService } from './groups-ser.service';

describe('GroupsSerService', () => {
  let service: GroupsSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupsSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
