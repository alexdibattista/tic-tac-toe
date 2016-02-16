var React = require('react');

var BoardCell = React.createClass({
  render: function () {
    return (
      <li>
        {this.props.cell.text}
      </li>
    );
  },
});

module.exports = BoardCell;
