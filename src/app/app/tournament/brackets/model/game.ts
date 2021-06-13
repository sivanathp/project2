
export class Game {

    public player1 : string;
    public player2: string;
    public playerWon: string;

   // constructor() {
   //     this.player1 = '';
   //     this.player2 = '';
   //     this.playerWon = '';
   //  }
	 
	 constructor(player1 :string, player2 :string) {
        
		if (player1 && player2) {
		   this.player1 = player1;
           this.player2 = player2;
           this.playerWon = '';
		} 
     }

     setWinner(player:string) {
         if (player) {
            this.playerWon = player;
            console.log('Winner is ' + this.playerWon);
            return true;
         } else {
             return false;
         }
         
     }
    
}
