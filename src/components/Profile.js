import React from 'react';
import Screamer from './Screamer.js';


var Profile = React.createClass({
  getDefaultProps () {
    return {name: "stones"}
  },

  render: function () {
    var num = Math.abs(-55);
    return (
        <div>
          <h1>{this.props.name} {num}</h1>
          <Screamer />
        </div>

    );
  }
});

export default Profile;
