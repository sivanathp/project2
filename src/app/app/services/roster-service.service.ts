import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RosterServiceService {

  private contestants: String[];
  constructor() { 
   this.contestants = ['player1', 'player2', 'player3'];  
}
  
  getContestants(): String[] {
  return this.contestants;
  }

  addContestant(player: String) {
    if (player) {
         
let foundPlayer= this.contestants.find(each => each === player );
    if (foundPlayer) {
      return false;
    }
    this.contestants.push(player);
    return true;
   } else {
   return false;
   }
  }


  
}
