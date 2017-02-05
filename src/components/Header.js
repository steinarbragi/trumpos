import React from 'react';
import Clock from './Clock.js';
import TrumpCover from '../assets/img/trumpcover.jpg';

var Header = React.createClass({
  render: function () {
    return (
      <div style={{background:'url('+TrumpCover+')center center',backgroundSize:'cover'}} className="App-header">
        <h1 style={{margin:'70px 0px'}}>Trump's random tweet generator</h1>
      </div>
    );
  }
});

export default Header;
