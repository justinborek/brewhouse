import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import '../styles/login.css';
import brewhouseLogo from '../images/brewhouse7.png';
import Users from '../assets/user-data.js';
import { getUser } from '../actions';

import { Link } from 'react-router-dom';

class Login extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  goToBrewhouse = () => {
    this.props.history.push('Brewhouse');
  }

  verifyUser = (user, pass) => {
    let passToCheck = '';
    for (const activeUser in Users) {
      if (Users[activeUser].username === user || Users[activeUser].email === user) {
         passToCheck = Users[activeUser].password;
        console.log(passToCheck);
      } 
    }
    if (passToCheck === ''){
      alert('username does not exist');
    } else if (passToCheck === pass){
        this.goToBrewhouse();
    } else {
      alert('password does not match username');
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

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, { getUser })(Login);