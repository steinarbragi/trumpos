import React, { Component } from 'react';
import '../../assets/css/Apps.css';

class AppDock extends Component {

  render() {
    return (
      <div className="AppDock">
        <div className="box effect">
          {this.props.children}
        </div>
      </div>
    );
  }
};

export default AppDock;
