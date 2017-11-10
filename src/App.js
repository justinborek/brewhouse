import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import { Splash, Brewhouse, Login } from './components';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;

