import React, { Component } from 'react';
import './assets/css/App.css';
import './assets/css/AppList.css';
import TwitterView from './components/twitter/TwitterView.js';
import AppLauncher from './components/apps/AppLauncher.js';
import Nav from './components/Nav.js';
import TwitterAppIcon from './assets/img/apps/twitterAppIcon.png';

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
    if (this.state.view==='AppList') {
      return (
        <div className="AppList">
          <div className="App">
            <AppLauncher onAppClick={e => this.handleClick(e, 'TwitterView')} name="Tweet Generator" image={TwitterAppIcon} />
          </div>
        </div>
      );
    }
    else if (this.state.view==='TwitterView') {
      return (
        <div className="App">
          <Nav />
          <TwitterView />
        </div>
      );
    }
  }
}

export default App;
