import React, { Component } from 'react';
import './assets/css/App.css';
import Profile from './components/Profile.js';
import Nav from './components/Nav.js';
import Header from './components/Header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Header/>

      </div>
    );
  }
}

export default App;
