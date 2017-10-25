import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1><input type = 'text'></input></h1>
        <h2><input type = 'text'></input></h2>
        <h3><button>Login</button></h3>
        <h4><button>Get Started</button></h4>
        <h5><button>I Just Need A Quick Calculation!</button></h5>

      </div>
    );
  }
}

export default App;

