import React, { Component } from 'react';
import './login.css';
import userData from './user-data';

class Login extends Component {

render() {
  return (
    <div className="App">
      <h1><input type = 'text'></input></h1>
      <h2><input type = 'text'></input></h2>
      <h3><button>Login</button></h3>
      <h4><button>Get Started</button></h4>
      <h5><button>I Just Need A Quick Calculation!</button></h5>
    </div>
  );
}
}

export default Login;