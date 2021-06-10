
export class Game {

    public player1 : string;
    public player2: string;
    public playerWon: string;

    constructor() {
        this.player1 = '';
        this.player2 = '';
        this.playerWon = '';
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
