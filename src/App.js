import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import { Splash, Brewhouse, Login } from './components';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact={true} path="/" component={Splash} />
        <Route path="/Login" component={Login} />
        <Route path="/Brewhouse" component={Brewhouse} />
      </div>
    );
  }
}

export default App;

