var React = require('react');
var ReactDom = require('react-dom');
var BoardManager = require('./components/BoardManager.jsx');

ReactDom.render(<BoardManager />, document.getElementById('board'));
