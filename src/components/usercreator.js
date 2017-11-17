import React, { Component } from 'react';

import userData from '../assets/user-data.js';

import '../styles/userCreator.css';

const newUser = {};

class UserCreator extends Component {
  verifyBasicInfo = (name, email, user, pass, pass2) => {
    if (!user){
      alert('Please enter a username');
    } else {
      newUser.username = user;
    }
    if (!pass){
      alert('Please enter a password');
    }else{
      if (pass === pass2){
        newUser.password = pass;
      } else {
        alert('Passwords do not match, please double check and re-enter');
      }
    }
    const splitName = name.split(' ');
    if (splitName.length <= 1){
      alert("Please enter a valid first and last name");
    }else if (splitName.length > 2){
      let first = '';
      for (let i = 0; i < splitName.length-1; i++){
        first += ` ${splitName[i]}`;
      }
      newUser.firstName = first;
      newUser.lastName = splitName[splitName.length-1];
    }else {
      newUser.firstName = splitName[0];
      newUser.lastName = splitName[1];
    }
    if (email.includes('@') && email.includes('.')){
      newUser.email = email;
    } else {
      alert('Please enter a valid email address');
    }
    newUser.isSubscriber = false;
  }
  render(){
    return(
      <div className = 'container'>
        <div className = 'content' id = 'basicinfo'>
          <h1> Welcome to Brewhouse! </h1>
          <p> First, let's collect some basic info. </p>
          <form>
            <div className = 'form-group'>
              <input type='text' placeholder='Please enter your first and last name' id='name'/>
            </div>
            <div className='form-group'>
              <input type='email' placeholder='Please enter your email address' id='email'/>
            </div>
            <div className='form-group'>
              <input type='text' placeholder='Please enter the username you would like to use' id='usr'/>
            </div>
            <div className='form-group'>
              <input type='password' placeholder='Please enter a password for your account' id='pswd'/>
            </div>
            <div className='form-group'>
              <input type='password' placeholder='Please re-enter your password' id='pswd2'/>
            </div>
          </form>
          <button id='basicInfoButton' onClick={() => {
            this.verifyBasicInfo(
              document.getElementById('name').value,
              document.getElementById('email').value,
              document.getElementById('usr').value,
              document.getElementById('pswd').value,
              document.getElementById('pswd2').value,
            )
            console.log(newUser);
          }}>Submit</button>
        </div>
      </div>
    )
  }
}

export default UserCreator;