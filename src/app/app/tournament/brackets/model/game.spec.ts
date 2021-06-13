import { Game } from './game';

describe('Game', () => {
  it('should create an instance', () => {
    expect(new Game('Ajna','Lewis')).toBeTruthy();
  });

  it('Should create Game with two players', () => {
   
    let player1: string;
    let player2: string;
    player1 = 'Ajna';
    player2 = 'Lewis';
    let game = new Game(player1,player2);
    expect(game).toBeTruthy();
    
    expect(game.player1).toEqual('Ajna');

    game.setWinner('Lewis');
    expect(game.playerWon).toEqual('Lewis');
	
  });
});

