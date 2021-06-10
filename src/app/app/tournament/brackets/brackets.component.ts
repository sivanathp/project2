import { Component, OnInit } from '@angular/core';
import { RosterServiceService } from '../../services/roster-service.service';
import { Game } from './model/game';

@Component({
  selector: 'app-brackets',
  templateUrl: './brackets.component.html',
  styleUrls: ['./brackets.component.css']
})
export class BracketsComponent implements OnInit {
	
	rosterService:RosterServiceService;
	public players: string[];
	public roundNumber : number;
  public totalGames : number;
  public listOfGames : Array<Game>;
  public game1 = new Game();
  public game2 = new Game();
  public game3 = new Game();
  public game4 = new Game();
  public message :string;
  public winner :string;

  constructor(rosterService: RosterServiceService) { 
   
   this.rosterService = rosterService;
   this.players = rosterService.getContestants();   
   this.roundNumber = 1;
   this.totalGames = 0;
   this.listOfGames = [];
   this.game1 = new Game();
   this.game2 = new Game();
   this.game3 = new Game();
   this.game4 = new Game();
   this.message ='';
   this.winner = '';
   this.setFirstRound();
   }
   
   setFirstRound() {
     if (this.players.length == 8) {
        this.totalGames = 4;
     } else if (this.players.length == 4) {
      this.totalGames = 2;
     } else if (this.players.length == 2) {
      this.totalGames = 1;
     } 
	   this.roundNumber = 1;
     this.setGames();
   }	   

   setSecondRound() {
     if (this.completeRound){

      if (this.players.length == 4) {
        this.totalGames = 2;
       } else if (this.players.length == 2) {
        this.totalGames = 1;
       } 
       this.roundNumber = 2;

     }
     this.setGames();
    
  }	

  setThirdRound() {
    if (this.completeRound){

       this.totalGames = 1;
       this.roundNumber = 3;

     }
     this.setGames();
    
  }	

  setwinner() {
    if (this.completeRound){
       console.log('Winner is' + this.winner);
       this.message ='Winner is' + this.winner;
    }

  }

  setGames() {
    if (this.totalGames = 4) {
      this.game1.player1 = this.players[0];
      this.game1.player2 = this.players[1];
      console.log('Game 1 '+ this.game1.player1 +'  '+ this.game1.player2)

      this.game2.player1 = this.players[2];
      this.game2.player2 = this.players[3];
      console.log('Game 2 '+ this.game2.player1 +'  '+ this.game2.player2)

      this.game3.player1 = this.players[4];
      this.game3.player2 = this.players[5];
      console.log('Game 3 '+ this.game3.player1 +'  '+ this.game3.player2)


      this.game4.player1 = this.players[6];
      this.game4.player2 = this.players[7];
      console.log('Game 4 '+ this.game4.player1 +'  '+ this.game4.player2)

      this.listOfGames = [this.game1,this.game2,this.game3,this.game4];
    } else if (this.totalGames = 2){
      this.game1.player1 = this.players[0];
      this.game1.player2 = this.players[1];

      this.game2.player1 = this.players[2];
      this.game2.player2 = this.players[3];

      this.listOfGames = [this.game1,this.game2];
    } else {
      this.game1.player1 = this.players[0];
      this.game1.player2 = this.players[1];
      this.listOfGames = [this.game1];
    }

  }

  completeRound() {
    if (this.totalGames = 4) {
      if (!this.game1.playerWon || !this.game2.playerWon || !this.game3.playerWon || !this.game4.playerWon) {
        console.log("Set winner for all matches");
        this.message = 'Set winner for all matches';
        return false;
      } 
      this.players = [this.game1.playerWon , this.game2.playerWon , this.game3.playerWon , this.game4.playerWon];
    }

    if (this.totalGames = 2) {
      if (!this.game1.playerWon || !this.game2.playerWon ) {
        console.log("Set winner for all matches");
        this.message = 'Set winner for all matches';
        return false;
      } 
      this.players = [this.game1.playerWon , this.game2.playerWon ];
    }

    if (this.totalGames = 1) {
      if (!this.game1.playerWon ) {
        console.log("Set winner for the match");
        this.message = 'Set winner for all match';
        return false;
      } 
      
      this.winner = this.game1.playerWon;
    }
    return true;
  }

  ngOnInit(): void {
  }
trackByFn(index: any, item: any) {
   return index;
}
}
