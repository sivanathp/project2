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
  public game1 : Game;
  public game2 : Game;
  public game3 : Game;
  public game4 : Game;
  public message :string;
  public winner :string;
  public game1Exists :string;
  public game2Exists :string;
  public game3Exists :string;
  public game4Exists :string;

  constructor(rosterService: RosterServiceService) { 
   
   this.rosterService = rosterService;
   this.players = rosterService.getContestants();   
   this.roundNumber = 1;
   this.totalGames = 0;
   this.listOfGames = [];
   this.game1 = new Game('','');
   this.game2 = new Game('','');
   this.game3 = new Game('','');
   this.game4 = new Game('','');
  this.game1Exists = '';
  this.game2Exists = '';
  this.game3Exists = '';
  this.game4Exists = '';
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
      console.log("In second round");
      console.log("players" + this.players);
      if (this.players.length == 4) {
        this.totalGames = 2;
       } else if (this.players.length == 2) {
        this.totalGames = 1;
       } 
       this.roundNumber = 2;

    
     this.setGames();
    
  }	

  setThirdRound() {
    
       this.totalGames = 1;
       this.roundNumber = 3;

     this.setGames();
    
  }	

  setGames() {
    this.resetGames();
    if (this.totalGames == 4) {

      this.game1 = new Game(this.players[0],this.players[1]);
        this.game2 = new Game(this.players[2],this.players[3]);
        this.game3 = new Game(this.players[4],this.players[5]);
        this.game4 = new Game(this.players[6],this.players[7]);
        this.game1Exists = 'Y';
        this.game2Exists = 'Y';
        this.game3Exists = 'Y';
        this.game4Exists = 'Y';

      console.log('Game 1 '+ this.game1.player1 +'  '+ this.game1.player2)

      console.log('Game 2 '+ this.game2.player1 +'  '+ this.game2.player2)

      console.log('Game 3 '+ this.game3.player1 +'  '+ this.game3.player2)


      console.log('Game 4 '+ this.game4.player1 +'  '+ this.game4.player2)

      this.listOfGames = [this.game1, this.game2, this.game3, this.game4];
    } else if (this.totalGames == 2){
      this.game1 = new Game(this.players[0],this.players[1]);
      this.game2 = new Game(this.players[2],this.players[3]);
      this.game1.playerWon = '';
      this.game2.playerWon = '';
      this.game1Exists = 'Y';
      this.game2Exists = 'Y';
      this.listOfGames = [this.game1,this.game2];
    } else if (this.totalGames == 1){
      this.game1 = new Game(this.players[0],this.players[1]);
      this.game1.playerWon = '';
      this.listOfGames = [this.game1];
      this.game1Exists = 'Y';
        
        
    } else {
      this.listOfGames = [];
      this.game1Exists = '';
    }

  }
  
    resetGames() {
 //   this.game1 = new Game();
 //   this.game2 = new Game();
 //   this.game3 = new Game();
 //   this.game4 = new Game();
        this.game1Exists = '';
        this.game2Exists = '';
        this.game3Exists = '';
        this.game4Exists = '';
        
        
 }

  completeRound() {
    this.message = '';
    
    if (this.totalGames == 4) {
      if (!this.game1.playerWon || !this.game2.playerWon || !this.game3.playerWon || !this.game4.playerWon) {
        console.log("Set winner for Four matches");
        this.message = 'Set winner for four matches';
        return false;
      } 
      console.log("Setting winner for Four matches");
      this.players = [this.game1.playerWon , this.game2.playerWon , this.game3.playerWon , this.game4.playerWon];
      
    }

    if (this.totalGames == 2) {
      if (!this.game1.playerWon || !this.game2.playerWon ) {
        console.log("Set winner for two matches");
        this.message = 'Set winner for two matches';
        return false;
      } 
      console.log("Setting winner for two matches");
      this.players = [this.game1.playerWon , this.game2.playerWon ];
    }

    if ((this.roundNumber == 1) && (this.totalGames > 1)) {
      console.log("players" + this.players);
      this.setSecondRound();
      return true;
    }

    if ((this.roundNumber == 2) && (this.totalGames > 1)) {
      console.log("players" + this.players);
      this.setThirdRound();
      return true;
    }
    console.log("totalGames is " +this.totalGames);
    if (this.totalGames == 1) {
      if (!this.game1.playerWon ) {
        this.message = 'Set winner for the match';
        return false;
      } 
      
      this.winner = this.game1.playerWon;
      console.log("Winner is " + this.winner);
      this.message = 'Winner is ' +this.winner;
      this.players = [];
      this.resetGames();
    }
    
    return true;
  }

  ngOnInit(): void {
  }
}

