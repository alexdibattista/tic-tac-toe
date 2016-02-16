var React = require('react');
var Board = require('./Board.jsx');

var BoardManager = React.createClass({
  getInitialState: function () {
    return { cells: [
      { id: 0, text: 'X' },
      { id: 1, text: '' },
      { id: 2, text: '' },
      { id: 3, text: '' },
      { id: 4, text: '' },
      { id: 5, text: '' },
      { id: 6, text: '' },
      { id: 7, text: '' },
      { id: 8, text: '' },
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
