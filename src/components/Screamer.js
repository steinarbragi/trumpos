import React from 'react';


var Screamer = React.createClass({

  scream: function()  {
    alert("AAAAA");
  },
  render: function () {
    var num = Math.abs(-55555);
    return (
      <button onClick={this.scream}>YO {num}</button>
    );
  }
});

export default Screamer;
