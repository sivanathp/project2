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
    this.players = this.rosterService.getContestants();
  }

   registerContestants() {

   }

}
