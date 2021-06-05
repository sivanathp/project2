import { Component, OnInit } from '@angular/core';

import { RosterServiceService } from 'app/services/rosterservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public players: string[]
  public message: string;

  constructor(private rosterService: RosterServiceService) { 
   this.players = ['','','','','','','',''];   
   this.message = '';
}

  
  ngOnInit() {
    
    this.players = rosterService.getcontestants();
console.log('this.players assignment to contestants);
  }

registerContestants() {
   var validcount:int = 0;
  for (var i = 0; i <  8; ++i) {
   if (this.players[i]) {

      var inserted:boolean =  rosterService.addContestant(this.player[i]);
      if (inserted) {
         console.log("record registered");
      ] ELSE {

         CONSOLE.LOG("INVALID MEMBER");
      }
   }

  }
   
  if (this.players.length  % 2 == 1) {
     console.log("PLayes should be 2,4 or 8");

  }
}
}

  


}
