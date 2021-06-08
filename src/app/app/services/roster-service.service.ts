import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RosterServiceService {

  private contestants: string[];
  constructor() { 
   this.contestants = ['','','','','','','',''];  
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
    this.contestants.unshift(player);
    return true;
   } else {
   return false;
   }
  }


  
}
