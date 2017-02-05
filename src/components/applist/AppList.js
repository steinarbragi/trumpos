import React from 'react';
import App from './AppLauncher.js';

var Applist = React.createClass({
  render: function () {
    return (
      <div className="AppList">
        <AppLauncher name="twitter" icon="icon" view="TwitterView" />
      </div>
    );
  }
});

export default AppList;
