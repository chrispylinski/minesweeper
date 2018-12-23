/*
const blankline = '  |   |  ';
const guessLine = '1 |   |  ';
const bombLine = '  | B |  ';

console.log('This is what an empty board would look like:');
console.log(blankline);
console.log(blankline);
console.log(blankline);
console.log('This is what a board with a guess and a bomb on it would look like:');
console.log(guessLine);
console.log(bombLine);
console.log(blankline);
*/

const printBoard = board => {
  console.log('Current Board: ');
  console.log(board[0].join(' | '));
  console.log(board[1].join(' | '));
  console.log(board[2].join(' | '));
};
let board = [
  [' ', ' ', ' ' ],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

printBoard(board);   // console.log(board);
// setting values on the game board
board[0][1] = '1'; // represents a player's guess
board[2][2] = 'B'; // represents a bomb on the board
printBoard(board);
