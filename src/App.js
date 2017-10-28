import React, { Component } from 'react';
import './App.css';
import Splash from './splash/splash.js';
import Brewhouse from './brewhouse/brewhouse.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Brewhouse />
      </div>
    );
  }
}

export default App;

