var React = require('react');
var BoardCell = require('./BoardCell.jsx');

var Board = React.createClass({
  render: function () {

    var createCell = function (player, x, y) {
      return <BoardCell key={ x + ',' + y } text={player} />;
    };

    return (<ul>{this.props.cells.map(createCell)}</ul>);
  },
});

module.exports = Board;
