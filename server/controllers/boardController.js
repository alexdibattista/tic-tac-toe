'use strict';

var express = require('express');
var router = express.Router();
var Board = require('../models/board');

/* GET home page. */
router.get('/', function (req, res) {
  var board = new Board();

  if (board.board.length === 0) {
    board.initializeBoard();
  }

  res.json(board.board);
});

module.exports = router;
