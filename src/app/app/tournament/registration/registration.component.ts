import { Component, OnInit } from '@angular/core';
import { RosterServiceService } from '../../services/roster-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public players: string[];
  public message: string;
  rosterService:RosterServiceService;

  constructor(rosterService: RosterServiceService) { 
   this.players = ['','','','','','','',''];   
   this.message = '';
   this.rosterService = rosterService;
}

  
  ngOnInit() {
    
    //this.players = this.rosterService.getContestants();
    console.log('assignment to contestants');
  }

trackByFn(index: any, item: any) {
   return index;
}

registerContestants() {
   console.log('PLayers are ' + this.players);
   var validcount = 0;
  for (var i = 0; i < 8; ++i) {
   console.log('Trying for ' + this.players[i]);
  
   if (this.players[i]) {

      var inserted:boolean =  this.rosterService.addContestant(this.players[i]);
      if (inserted) {
         console.log("record registered");
         this.message = "Players Registered";
      } else {

         console.log("INVALID MEMBER");
this.message = "INVALID MEMBER";  
      }
   }

  }
   console.log('How many Total' + this.rosterService.getContestants());
  if (this.rosterService.getContestants().length  % 2 == 1) {
     console.log("Playes should be 2,4 or 8");
     this.message = "Playes should be 2,4 or 8";

  }
}
}

