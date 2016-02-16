var React = require('react');
var BoardCell = require('./BoardCell.jsx');

var Board = React.createClass({
  render: function () {

    var createCell = function (cell, index) {
      return <BoardCell key={index + cell.text} cell={cell} />;
    };

    return (
      <div className="row">
        {this.props.cells.map(createCell)}
      </div>
    );
  },
});

module.exports = Board;
