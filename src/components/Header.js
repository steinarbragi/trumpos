import React from 'react';
import Clock from './Clock.js';

var Header = React.createClass({
  render: function () {
    return (
      <div className="App-header">
        <Clock />
        <h2>TrumpOS</h2>
      </div>
    );
  }
});

export default Header;
