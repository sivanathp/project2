import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationComponent ]
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
  
  it('should allow 2,4,8 contestants', () => {
   
    component.players = new Array('new one','Second');
	component.registerContestants();
	expect(component.rosterService.getContestants().length).toEqual(2);   
	
	component.players = new Array('new one','Second', 'Third','Four');
    component.registerContestants();
	expect(component.rosterService.getContestants().length).toEqual(4);   
	
	component.players = new Array('new one','Second', 'Third','Four','Five','Six','Seven','Eight');
    component.registerContestants();
	expect(component.rosterService.getContestants().length).toEqual(8);   
	
  });
});
