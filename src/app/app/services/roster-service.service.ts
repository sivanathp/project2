import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RosterServiceService {

  private contestants: String[];
  constructor() { }
  
  getContestants(): String[] {
  return this.contestants;
  }

  addContestant(player: String) {
    let foundPlayer= this.contestants.find(each => each === player );
    if (foundPlayer) {
      return false;
    }
    this.contestants.push(player);
    return true;
  }


  
}
