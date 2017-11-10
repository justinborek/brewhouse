import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../styles/login.css';
import brewhouseLogo from '../images/brewhouse7.png';


class Login extends Component {
  render() {
    return (
      <div className="loginPage">
        <div className = "loginFormContainer">
          <img src = {brewhouseLogo} className = "logo" />
          <form>
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Username" id="usr"/>
            </div>
            <div class="form-group">
              <input type="password" class="form-control" placeholder="Password" id="pwd"/>
            </div>
          </form> 
          <button>Login</button>
        </div>
      </div>
    );
  }
}

export default Login;