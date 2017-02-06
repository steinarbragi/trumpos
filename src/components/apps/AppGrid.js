import React, { Component } from 'react';
import '../../assets/css/Apps.css';

class AppGrid extends Component {

  render() {
    return (
      <div className="AppGrid">
        <div className="box effect">
          {this.props.children}
        </div>
      </div>
    );
  }
};

export default AppGrid;
