var React = require('react');
var Board = require('./Board.jsx');

var BoardManager = React.createClass({
  getInitialState: function () {
    return { cells: [
      { id: 0, text: 'X' },
      { id: 1, text: 'O' },
      { id: 2, text: 'X' },
      { id: 3, text: 'O' },
      { id: 4, text: 'X' },
      { id: 5, text: 'O' },
      { id: 6, text: 'X' },
      { id: 7, text: 'O' },
      { id: 8, text: 'X' },
    ],
    move: '',
  };
  },

  render: function () {
    return (
      <Board cells={this.state.cells} />
    );
  },
});

module.exports = BoardManager;
