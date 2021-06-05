import { TestBed } from '@angular/core/testing';
import 'jasmine';

import { RosterServiceService } from './roster-service.service';

describe('RosterServiceService', () => {
  var rosterService: RosterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    rosterService = TestBed.inject(RosterServiceService);
  });

  beforeEach(inject([RosterServiceService],           
    (service: RosterServiceService) => {
      rosterService = service;
  }));

  it('should be created', () => {
    expect(rosterService).toBeTruthy();
  });
  
  it('should allow adding players', () => {
    expect(rosterService.getContestants().length).toEqual(3); 
   let player:string = "new one";
    expect(rosterService.addContestant(player)).toBeTruthy();    
    expect(rosterService.getContestants().length).toEqual(4);      
    expect(rosterService.getContestants()[3]).toEqual('new one')
  });
  

});
