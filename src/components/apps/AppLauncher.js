import React from 'react';

var AppLauncher = React.createClass({

  render: function () {
    return (
      <div className="AppLauncher" onClick={this.props.onAppClick}>
        <img src={this.props.image} alt={this.props.name} />
        <p className="AppLabel">{this.props.name}</p>
      </div>
    );
  }
});

export default AppLauncher;
