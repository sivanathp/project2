import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BracketsComponent } from './brackets.component';

import { RegistrationComponent } from './../registration/registration.component';


import { Game } from './model/game';

import { RosterServiceService } from './../../services/roster-service.service';


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
    registrationFixture = TestBed.createComponent(RegistrationComponent);
    registrationComponent = registrationFixture.componentInstance;
    rosterServiceService = registrationFixture.debugElement.injector.get(RosterServiceService);
    
    registrationFixture.detectChanges();
    fixture = TestBed.createComponent(new Type<BracketsComponent(rosterServiceService)>);
    
    component = fixture.componentInstance;

    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(rosterServiceService).toBeTruthy();
    expect(component).toBeTruthy();
    expect(registrationComponent).toBeTruthy();
  });

  it('8 contestants should have Four Games', () => {
   
   
    registrationComponent.players = new Array('new one','Second', 'Third','Four','Five','Six','Seven','Eight');
    registrationComponent.registerContestants();
  	expect(component.rosterService.getContestants().length).toEqual(8);
     component.setFirstRound();
     expect(component.totalGames).toEqual(4);

	
  });

  it('4 contestants should have Two Games', () => {
   
   
    registrationComponent.players = new Array('new one','Second', 'Third','Four');
    registrationComponent.registerContestants();
	expect(component.rosterService.getContestants().length).toEqual(4);
     component.setFirstRound();
     expect(component.totalGames).toEqual(2);

	
  });



});
