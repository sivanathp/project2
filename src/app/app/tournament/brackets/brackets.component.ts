import { Component, OnInit } from '@angular/core';
import { RosterServiceService } from '../../services/roster-service.service';

@Component({
  selector: 'app-brackets',
  templateUrl: './brackets.component.html',
  styleUrls: ['./brackets.component.css']
})
export class BracketsComponent implements OnInit {
	
	rosterService:RosterServiceService;
	public players: string[];

  constructor(rosterService: RosterServiceService) { 
   
   this.rosterService = rosterService;
   this.players = rosterService.getContestants();   
  
   }

  ngOnInit(): void {
  }
trackByFn(index: any, item: any) {
   return index;
}
}
