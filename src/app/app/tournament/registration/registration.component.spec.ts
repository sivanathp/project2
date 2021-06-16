import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';

import { RosterServiceService } from './../../services/roster-service.service';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationComponent ], 
      providers: [ RosterServiceService ]                             
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should not allow 1 contestants', () => {
   
    component.players = new Array('new one');
	component.registerContestants();
    expect(component.rosterService.getContestants().length).toEqual(0);   
    
  });
  
  it('should not allow 3 contestants', () => {
   
    component.players = new Array('new one','Second', 'Third');
	component.registerContestants();
    expect(component.rosterService.getContestants().length).toEqual(0);   
    
  });
  
  it('should not allow 5 contestants', () => {
   
    component.players = new Array('new one','Second', 'Third','Four','Fifth');
	component.registerContestants();
    expect(component.rosterService.getContestants().length).toEqual(0);   
    
  });
  

  it('Empty players between valid players', () => {
   
    component.players = new Array('new one','Second', '','Three','','Four');
	component.registerContestants();
    expect(component.rosterService.getContestants().length).toEqual(4);   
    expect(component.rosterService.getContestants()[0]).toEqual('new one');  
    expect(component.rosterService.getContestants()[1]).toEqual('Second');  
    expect(component.rosterService.getContestants()[2]).toEqual('Three');  
    expect(component.rosterService.getContestants()[3]).toEqual('Four');  
    
  });

  it('Should not allow duplicate players', () => {
   
    component.players = new Array('Second', '','Second','','Four');
	component.registerContestants();
    expect(component.rosterService.getContestants().filter.length).toEqual(1);   
    
  });

  it('Should not allow empty players', () => {
   
    component.players = new Array('Second', '','Three','','Four','', 'One');
	component.registerContestants();
    expect(component.rosterService.getContestants().length).toEqual(4);   
    expect(component.rosterService.getContestants()[0]).toEqual('Second');  
    expect(component.rosterService.getContestants()[1]).toEqual('Three');  
    expect(component.rosterService.getContestants()[2]).toEqual('Four');  
    expect(component.rosterService.getContestants()[3]).toEqual('One'); 
    
  });

  it('should allow 2,4,8 contestants', () => {
   
    component.players = new Array('new one','Second');
	component.registerContestants();
	expect(component.rosterService.getContestants().length).toEqual(2);   
  expect(component.rosterService.getContestants()[0]).toEqual('new one');  
  expect(component.rosterService.getContestants()[1]).toEqual('Second');  
	
	component.players = new Array('new one','Second', 'Third','Four');
    component.registerContestants();
	expect(component.rosterService.getContestants().length).toEqual(4);  
  expect(component.rosterService.getContestants()[0]).toEqual('new one');  
  expect(component.rosterService.getContestants()[1]).toEqual('Second');  
  expect(component.rosterService.getContestants()[2]).toEqual('Third');  
  expect(component.rosterService.getContestants()[3]).toEqual('Four');   
	
	component.players = new Array('new one','Second', 'Third','Four','Five','Six','Seven','Eight');
    component.registerContestants();
	expect(component.rosterService.getContestants().length).toEqual(8);   
  expect(component.rosterService.getContestants()[0]).toEqual('new one');  
  expect(component.rosterService.getContestants()[1]).toEqual('Second');  
  expect(component.rosterService.getContestants()[2]).toEqual('Third');  
  expect(component.rosterService.getContestants()[3]).toEqual('Four');  
  expect(component.rosterService.getContestants()[4]).toEqual('Five');  
  expect(component.rosterService.getContestants()[5]).toEqual('Six');  
  expect(component.rosterService.getContestants()[6]).toEqual('Seven');  
  expect(component.rosterService.getContestants()[7]).toEqual('Eight');  
	
  });
});
