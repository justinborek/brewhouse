import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../styles/login.css';
import brewhouseLogo from '../images/brewhouse7.png';
import { verifyUser } from '../actions';


class Login extends Component {

  goToBrewhouse = () => {
    this.props.history.push('Brewhouse');
  }

  userVerification = (user, pass) => {
    let promise = this.props.verifyUser(user, pass);
    promise
      .then(currentUser => this.goToBrewhouse());
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
            this.userVerification(document.getElementById("usr").value, document.getElementById("pwd").value);
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


export default connect(mapStateToProps, { verifyUser })(Login);