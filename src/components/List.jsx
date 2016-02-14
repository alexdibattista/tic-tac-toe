var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingredients = [{ id: 1, text: 'ham' }, { id: 2, text: 'tomato' }, { id: 3, text: 'chips' }];

var List = React.createClass({
  render: function () {
    var listItems = ingredients.map(function (item) {
      return <ListItem key={item.id} ingredient={item.text} />;
    });

    return (<ul>{listItems}</ul>);
  },
});

module.exports = List;
