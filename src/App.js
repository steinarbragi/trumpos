import React, { Component } from 'react';
import './assets/css/App.css';
import Profile from './components/Profile.js';
import Nav from './components/Nav.js';
import Header from './components/Header.js';
import Toggle from './components/Toggle.js';

import TalkingMachine from './components/talking-machine.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Header/>
        <p className="App-intro">
          Testing testing..
        </p>
        <Profile name="Steinar"/>
        <TalkingMachine />
        <Toggle />
      </div>
    );
  }
}

export default App;
