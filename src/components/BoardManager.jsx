var React = require('react');
var Board = require('./Board.jsx');

var BoardManager = React.createClass({
  getInitialState: function () {
    return { cells: [], move: '' };
  },

  render: function () {
    return (
      <Board cells={this.state.cells} />
    );
  },
});

module.exports = BoardManager;
