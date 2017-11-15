import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../styles/login.css';
import brewhouseLogo from '../images/brewhouse7.png';
import Users from '../assets/user-data.js';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';



class Login extends Component {

  goToBrewhouse = () => {
    this.props.history.push('Brewhouse');
  }

  verifyUser = (user, pass) => {
    for (const activeUser in Users) {
      if (Users[activeUser].username === user && Users[activeUser].password === pass) {
        this.goToBrewhouse();
      } else if (Users[activeUser].email === user && Users[activeUser].password === pass) {
        this.goToBrewhouse();
      } else{
        alert('no match');
      }
    }
  }

  render() {
    return (
      <div className="loginPage">
        <div className = "loginFormContainer">
          <div className = "logoContainer">
            <img src = {brewhouseLogo} className = "logo" />
          </div>
          <form>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Username/Email" id="usr"/>
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Password" id="pwd"/>
            </div>
          </form> 
          <button id="loginButton" onClick={() => {
            this.verifyUser(document.getElementById("usr").value, document.getElementById("pwd").value)
            }}>Login
          </button>
        </div>
      </div>
    );
  }
}

export default Login;