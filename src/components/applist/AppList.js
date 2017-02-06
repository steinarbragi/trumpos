import React from 'react';
import AppLauncher from './AppLauncher.js';
import TwitterAppIcon from '../../assets/img/apps/twitterAppIcon.png';
import TwitterView from '../twitter/TwitterView';
import '../../assets/css/AppList.css';

var AppList = React.createClass({
  render: function () {
    return (
      <div className="AppList">
        <AppLauncher name="Twitter" image={TwitterAppIcon} view={TwitterView} />
      </div>
    );
  }
});

export default AppList;
