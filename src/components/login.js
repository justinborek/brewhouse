import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../styles/login.css';
import brewhouseLogo from '../images/brewhouse7.png';
import Users from '../assets/user-data.js';


const verifyUser = (user, pass) => {
  console.log(Users);
  for (const activeUser in Users) {
    if (Users[activeUser].username === user && Users[activeUser].password === pass) {
      alert("match");
    }
    else{
      alert('no match');
    }
  }
}

class Login extends Component {
  render() {
    return (
      <div className="loginPage">
        <div className = "loginFormContainer">
          <div className = "logoContainer">
            <img src = {brewhouseLogo} className = "logo" />
          </div>
          <form>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Username" id="usr"/>
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Password" id="pwd"/>
            </div>
          </form> 
          <button id="loginButton" onClick={() => {
            verifyUser(document.getElementById("usr").value, document.getElementById("pwd").value)
            }}>Login
          </button>
        </div>
      </div>
    );
  }
}


export default Login;