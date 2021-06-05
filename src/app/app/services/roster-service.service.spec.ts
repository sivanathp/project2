import { TestBed } from '@angular/core/testing';

import { RosterServiceService } from './roster-service.service';

describe('RosterServiceService', () => {
  var rosterService: RosterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RosterServiceService);
  });

  beforeEach(inject([RosterServiceService],             1
    (service: RosterServiceService) => {
      rosterService = service;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
