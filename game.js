import { Board } from './board.js'


class Game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }

  playMove(rowIndex, columnIndex) {
    const tile = this._board.flipTile(rowIndex, columnIndex);
    if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
      console.log('The game is over.');
      this._board.print();
    } else if (this._board.hasSafeTiles()) {
      console.log('Congratulations, you won!');
    } else {
      console.log('Current Board: ');
      this._board.print();
    }
  }
}
