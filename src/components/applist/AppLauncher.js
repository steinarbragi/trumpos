import React from 'react';
import App from './AppLauncher.js';

var Applist = React.createClass({
  render: function () {
    return (
      <div className="AppLauncher">
        <img src={this.props.image} alt={this.props.name} />
        <span className="AppLabel">alt={this.props.name}</span>
      </div>
    );
  }
});

export default AppList;
