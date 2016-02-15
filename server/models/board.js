'use strict';

var Board = class {
  constructor () {
    this.board = [];
    this.players = ['X', 'O'];
    this.turn = this.players[0];
  }

  initializeBoard () {
    for (var c = 0; c < 3; c++) {
      this.board[c] = new Array(3);
      for (var r = 0; r < 3; r++) {
        this.board[c][r] = '*';
      }
    }
  }

  clearBoard () {
    this.initializeBoard();
  }

  move (player, x, y) {
    this.board[x][y] = this.players[player];
    this.setTurn(player);
  }

  setTurn (player) {
    var nextMove = 0;

    if (player === 0) {
      nextMove = 1;
    }

    this.turn = this.players[nextMove];
  }

  isBoardFull () {

  }
};

module.exports = Board;
