import React, { Component } from 'react';
import './assets/css/App.css';
import './assets/css/AppList.css';
import TwitterView from './components/twitter/TwitterView.js';
import AppLauncher from './components/applist/AppLauncher.js';
import TwitterAppIcon from './assets/img/apps/twitterAppIcon.png';
//import TwitterView from './components/twitter/TwitterView.js';
//import AppList from './components/applist/AppList.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'AppList',
    };
    this.handleClick = this.handleClick.bind(this);

  }
  handleClick(e,AppView) {
    this.setState({view: AppView});
  }
  render() {
    if (this.state.view==='AppList') {
      return (
        <div className="App">
          <div className="AppList">
            <AppLauncher view="TwitterView" onAppClick={e => this.handleClick(e, 'TwitterView')} name="Twitter" image={TwitterAppIcon} />
          </div>
        </div>
      );
    }
    else if (this.state.view==='TwitterView') {
      return (
        <div className="App">
          <TwitterView />
        </div>
      );
    }
  }
}

export default App;
