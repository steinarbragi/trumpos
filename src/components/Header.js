import React from 'react';
import TrumpCover from '../assets/img/trumpAppCover.jpg';

var Header = React.createClass({
  render: function () {
    return (
      <div style={{background:'url('+TrumpCover+')center center',backgroundSize:'cover'}} className="App-header">
        <h1>Trump's random tweet generator</h1>
      </div>
    );
  }
});

export default Header;
