var React = require('react');
var DefaultLayout = require('./layout');

var Index = React.createClass({
  render: function () {
    return (
      <DefaultLayout title={this.props.title}>
        <div id="board"></div>
      </DefaultLayout>
    );
  },
});

module.exports = Index;
