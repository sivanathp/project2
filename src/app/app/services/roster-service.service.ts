import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RosterServiceService {

  private contestants: string[];
  constructor() { 
   this.contestants = ['player1', 'player2', 'player3','player4', 'player5','player6', 'player7', 'player8'];  
}
  
  getContestants(): string[] {
    return this.contestants;
  }

  addContestant(player: string) {
    if (player) {
         console.log('contestants are' + this.contestants);
let foundPlayer= this.contestants.find(each => each === player);
    if (foundPlayer) {
      console.log('CAme to duplicate member');
      return false;
    }
    this.contestants.pop();
    this.contestants.push(player);
    return true;
   } else {
   return false;
   }
  }


  
}
