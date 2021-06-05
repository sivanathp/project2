import { TestBed, inject } from '@angular/core/testing';

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
  
  it('should not allow duplicate names', () => {
    expect(rosterService.getContestants().length).toEqual(3); 
   let player:string = "new one";
    expect(rosterService.addContestant(player)).toBeTruthy();    
	
	let newplayer:string = "new one";
	expect(rosterService.addContestant(newplayer)).toBeFalsy();    
   
  });
  
  it('should not allow null names', () => {
    expect(rosterService.getContestants().length).toEqual(3); 
   
	let newplayer:string = null;
	expect(rosterService.addContestant(newplayer)).toBeFalsy();    
   
  });
  
  it('should not allow empty string names', () => {
    expect(rosterService.getContestants().length).toEqual(3); 
   let player:string = "";
    expect(rosterService.addContestant(player)).toBeFalsy();    
	 
   
  });
  
   it('should add one contestant', () => {
    expect(rosterService.getContestants().length).toEqual(3); 
   let player:string = "player 1";
    expect(rosterService.addContestant(player)).toBeTruthy();    
	 
   
  });
  
  it('should add several contestants', () => {
    expect(rosterService.getContestants().length).toEqual(3); 
   let player:string = "player 1";
   let player2:string = "player 2";
   let player3:string = "player 3";
    expect(rosterService.addContestant(player)).toBeTruthy();    
	expect(rosterService.addContestant(player2)).toBeTruthy();    
	expect(rosterService.addContestant(player3)).toBeTruthy();    
	 
   
  });
});
