var React = require('react');
var DefaultLayout = require('./layout');

var HelloMessage = React.createClass({
  render: function () {
    return (
      <DefaultLayout title={this.props.title}>
        <div>{this.props.message}</div>
        <div id="ingredients"></div>
      </DefaultLayout>
    );
  },
});

module.exports = HelloMessage;
