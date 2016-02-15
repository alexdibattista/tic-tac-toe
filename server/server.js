// Declare dependencies
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var expressReactView = require('express-react-views');
var initialView = require('./controllers/Index');
var boardController = require('./controllers/boardController');
var Board = require('./models/board');

// Constants
const port = 3000;

// View Engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', expressReactView.createEngine());

// Set up static path
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', initialView);
app.use('/board', boardController);

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});

// Testing board
var board = new Board();

board.initializeBoard();
board.move(0, 0, 0);
board.move(1, 0, 1);
board.move(0, 0, 2);
board.move(1, 1, 0);
board.move(0, 1, 1);
board.move(1, 1, 2);
board.move(1, 2, 1);
board.move(0, 2, 2);
board.move(1, 2, 0);
console.log(board.board);

module.exports = app;
