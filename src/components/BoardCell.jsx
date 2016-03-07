var React = require('react');

var BoardCell = React.createClass({
  render: function () {
    var cell = this.props.cell;
    var returnValue = null;
    if (cell.id === 0) {
      returnValue = (
        <div className="col-md-1">
          {cell.text}
        </div>
      );
    }

    returnValue = (
      <div className="col-md-1">
        {cell.text}
      </div>
    );

    return returnValue;
  },
});

module.exports = BoardCell;
