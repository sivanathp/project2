import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BracketsComponent } from './brackets.component';

import { RegistrationComponent } from './../registration/registration.component';


import { Game } from './model/game';

import { RosterServiceService } from './../../services/roster-service.service';
import { ExpectedConditions } from 'protractor';


describe('BracketsComponent', () => {
  let component: BracketsComponent;
  let game : Game;
  let fixture: ComponentFixture<BracketsComponent>;

  let registrationComponent: RegistrationComponent;
  let registrationFixture: ComponentFixture<RegistrationComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BracketsComponent, RegistrationComponent ], 
      providers: [ RosterServiceService ]    
    })
    .compileComponents();
  }));

  beforeEach(() => {
    
    //rosterServiceService = TestBed.createComponent(RosterServiceService);
    //registrationFixture = TestBed.createComponent(RegistrationComponent);
    //registrationComponent = registrationFixture.componentInstance;
    //rosterServiceService = registrationFixture.debugElement.injector.get(RosterServiceService);
    
    //registrationFixture.detectChanges();
    fixture = TestBed.createComponent(BracketsComponent);
    
    component = fixture.componentInstance;

    
    fixture.detectChanges();
  });

  it('should create 2 players game', () => {
    expect(component).toBeTruthy();
    component.rosterService.addContestant('Player1');
    component.rosterService.addContestant('Player2');
    expect(component.rosterService.getContestants().length).toEqual(2);
    component.setFirstRound();
    expect(component.totalGames).toEqual(1);
    });

  it('8 contestants should have Four Games and 3 rounds', () => {
   
   
    expect(component).toBeTruthy();
    component.rosterService.addContestant('Player1');
    component.rosterService.addContestant('Player2');
    component.rosterService.addContestant('Player3');
    component.rosterService.addContestant('Player4');
    component.rosterService.addContestant('Player5');
    component.rosterService.addContestant('Player6');
    component.rosterService.addContestant('Player7');
    component.rosterService.addContestant('Player8');
    expect(component.rosterService.getContestants().length).toEqual(8);
    component.setFirstRound();
    expect(component.totalGames).toEqual(4);

    component.game1.setWinner(component.game1.player1);
    component.game2.setWinner(component.game2.player2);
    component.game3.setWinner(component.game3.player1);
    component.game4.setWinner(component.game4.player2);
    component.completeRound();

    expect(component.totalGames).toEqual(2);
    component.game1.setWinner(component.game1.player1);
    component.game2.setWinner(component.game2.player2);
    component.completeRound();
    expect(component.totalGames).toEqual(1);
    component.game1.setWinner(component.game1.player1);
    component.completeRound();
    expect(component.winner).toEqual('Player1');
    
    
    
	
	
  });

  it('4 contestants should have Two Games and two rounds', () => {
   
   
    expect(component).toBeTruthy();
    component.rosterService.addContestant('Player1');
    component.rosterService.addContestant('Player2');
    component.rosterService.addContestant('Player3');
    component.rosterService.addContestant('Player4');
    expect(component.rosterService.getContestants().length).toEqual(4);
    component.setFirstRound();
    expect(component.totalGames).toEqual(2);

    component.game1.setWinner(component.game1.player1);
    component.game2.setWinner(component.game2.player2);
    component.completeRound();
    expect(component.totalGames).toEqual(1);
    component.game1.setWinner(component.game1.player1);
    component.completeRound();
    expect(component.winner).toEqual('Player1');

   

	
  });



});
