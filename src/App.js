import React, { Component } from 'react';
import './assets/css/App.css';
import TwitterView from './components/twitter/TwitterView.js';
import AppLauncher from './components/os/AppLauncher.js';
import AppDock from './components/os/AppDock.js';
import AppGrid from './components/os/AppGrid.js';
import TwitterAppIcon from './assets/img/apps/twitterAppIcon.png';
import EtsyAppIcon from './assets/img/apps/etsyAppIcon.png';
import HomeAppIcon from './assets/img/apps/homeIcon.png';
import BlogAppIcon from './assets/img/apps/blogAppIcon.png';
import Wallpaper from './assets/img/trumpWallpaper.jpg';

const appGridStyle = {
  background: 'url(' + Wallpaper + ') no-repeat center center fixed',
  backgroundSize: 'cover',
  height: '100vh',
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'AppGrid',
    };
    this.setView = this.setView.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);

  }

  setView(e,AppView) {
    this.setState({view: AppView});
  }
  handleRedirect(e, url) {
    window.location = url;
  }
  render() {
    if (this.state.view==='AppGrid') {
      return (
        <div style={appGridStyle} className="App">
          <AppGrid>
              <AppLauncher onAppClick={e => this.setView(e, 'TwitterView')} name="TrumpTweet" image={TwitterAppIcon} />
              <AppLauncher onAppClick={e => this.handleRedirect(e, 'https://www.etsy.com/listing/291408839/the-donald-trump-print-various-sizes?ref=hp_rv')} name="Buy Poster" image={EtsyAppIcon} />
              <AppLauncher onAppClick={e => this.handleRedirect(e, 'http://steinar.io')} name="Dev Blog" image={BlogAppIcon} />
          </AppGrid>
          <AppDock>
            <AppLauncher onAppClick={e => this.setView(e, 'TwitterView')} name="TrumpTweet" image={TwitterAppIcon} />
            <AppLauncher onAppClick={e => this.setView(e, 'AppGrid')} name="Home" image={HomeAppIcon} />
          </AppDock>
        </div>
      );
    }
    else if (this.state.view==='TwitterView') {
      return (
        <div className="App">
          <TwitterView />
          <AppDock>
            <AppLauncher onAppClick={e => this.setView(e, 'TwitterView')} name="TrumpTweet" image={TwitterAppIcon} />
            <AppLauncher onAppClick={e => this.setView(e, 'AppGrid')} name="Home" image={HomeAppIcon} />
          </AppDock>
        </div>
      );
    }
  }
}

export default App;
