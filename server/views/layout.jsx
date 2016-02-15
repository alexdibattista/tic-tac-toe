var React = require('react');

var DefaultLayout = React.createClass({
  render: function () {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <script src='/js/react.js'></script>
          <script src='/js/react-dom.js'></script>
          <script async src='/js/main.js'></script>
        </head>
        <body>{this.props.children}</body>
      </html>
    );
  },
});

module.exports = DefaultLayout;
