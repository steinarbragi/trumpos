import React, { Component } from 'react';
import './assets/css/App.css';
import TwitterView from './components/twitter/TwitterView.js';
import AppLauncher from './components/os/AppLauncher.js';
import AppDock from './components/os/AppDock.js';
import AppGrid from './components/os/AppGrid.js';
import TwitterAppIcon from './assets/img/apps/twitterAppIcon.png';
import HomeAppIcon from './assets/img/apps/home.png';
import Wallpaper from './assets/img/apps/wallpaper.jpg';

const appGridStyle = {
  background: 'url(' + Wallpaper + ') no-repeat center center fixed',
  backgroundSize: 'cover',
  height: '100vh',
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'TwitterView',
    };
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(e,AppView) {
    this.setState({view: AppView});
  }
  render() {
    if (this.state.view==='AppGrid') {
      return (
        <div style={appGridStyle} className="App">
          <AppGrid>
              <AppLauncher onAppClick={e => this.handleClick(e, 'TwitterView')} name="TrumpTweet" image={TwitterAppIcon} />
          </AppGrid>
          <AppDock>
            <AppLauncher onAppClick={e => this.handleClick(e, 'TwitterView')} name="TrumpTweet" image={TwitterAppIcon} />
            <AppLauncher onAppClick={e => this.handleClick(e, 'AppGrid')} name="Home" image={HomeAppIcon} />
          </AppDock>
        </div>
      );
    }
    else if (this.state.view==='TwitterView') {
      return (
        <div className="App">
          <TwitterView />
          <AppDock>
            <AppLauncher onAppClick={e => this.handleClick(e, 'TwitterView')} name="TrumpTweet" image={TwitterAppIcon} />
            <AppLauncher onAppClick={e => this.handleClick(e, 'AppGrid')} name="Home" image={HomeAppIcon} />
          </AppDock>
        </div>
      );
    }
  }
}

export default App;
