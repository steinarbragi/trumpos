import React from 'react';
import logo from '../assets/logo.svg';


var Header = React.createClass({
  render: function () {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>steinar.io</h2>
      </div>
    );
  }
});

export default Header;
