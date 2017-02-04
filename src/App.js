import React, { Component } from 'react';
import './assets/css/App.css';
import Nav from './components/Nav.js';
import Header from './components/Header.js';
import TwitterView from './components/twitter/TwitterView.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Header/>
        <TwitterView />

      </div>
    );
  }
}

export default App;
