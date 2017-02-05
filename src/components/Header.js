import React from 'react';
import TrumpCover from '../assets/img/trumpAppCover.jpg';
import AppList from './applist/AppList.js';

var Header = React.createClass({
  render: function () {
    return (
      <div>
        <div style={{background:'url('+TrumpCover+')center center',backgroundSize:'cover'}} className="App-header"></div>
        <h1>{"Trump's random tweet generator"}</h1>
        <AppList />
      </div>
    );
  }
});

export default Header;
