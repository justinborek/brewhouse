import React, { Component } from 'react';

import '../styles/userCreator.css';

const newUser = {};
let userPassCheck = false;

const swipeLeft = (element) => {
  document.getElementById(element).animate([
    { left: '50%', opacity: '1' },
    { left: '-50%', opacity:  '0' }
  ], {
    duration: 300
  });
  document.getElementById(element).style.left = '-50%';
}
const generateFerms = (count, fermSize) => {
  for (let i = 0; i < count; i++) {
    newUser.equipment.fermenters[i] = {
      size: fermSize,
      activeRecipe: ''
    }
  }
}

class UserCreator extends Component {
  verifyBasicInfo = (name, email, user, pass, pass2) => {
    const splitName = name.split(' ');
    if (splitName.length <= 1){
      return alert("Please enter a valid first and last name");
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
      return alert('Please enter a valid email address');
    }
    if (!user){
      return alert('Please enter a username');
    } else {
      newUser.username = user;
    }
    if (!pass){
      return alert('Please enter a password');
    }else{
      if (pass === pass2){
        newUser.password = pass;
      } else {
        return alert('Passwords do not match, please double check and re-enter');
      }
    }
    newUser.equipment = {
      kettleSize: null,
      fermenters: {},
      otherEquipment: []
    };
    newUser.recipes = {};
    newUser.shoppingList = [];
    newUser.isSubscriber = false;
    newUser.readyToBrew = true;
    userPassCheck = true;
  }
  
  render(){
    return(
      <div className = 'container'>
        <div className = 'content' id = 'info1'>
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
            );
            if (userPassCheck === true) { 
              swipeLeft('info1');
              document.getElementById('info2').style.visibility = 'visible';
              userPassCheck = false;
            }
          }}>Submit</button>
        </div>
        
        <div className = 'content' id = 'info2' >
          <h1>Thanks {newUser.firstName}!</h1>
          <p>Are you already a brewer?</p>
          <button onClick={() => {
            let newUsers = document.getElementsByClassName('newUser');
            for (let i = 0; i < newUsers.length; i++) {
              newUsers[i].style.visibility = 'hidden';
            }
            swipeLeft('info2');
          }}>Yes</button>
          <button onClick={() => {
            swipeLeft('info2');
            document.getElementById('new1').style.visibility = 'visible';
          }}>No</button>
        </div>
        
        <div className = 'content newUser' id = 'new1' >
          <h1>Thanks!</h1>
          <p>Next, we're going to ask about the equipment you've got. 
            We'll make sure you have what you need, and if you don't, 
            we'll make a list of the things you need. You can always add
            or remove equipment later.</p>
          <button onClick={() => {
            swipeLeft('new1');
            document.getElementById('new2').style.visibility = 'visible';
          }}>Get Started</button>
        </div>

        <div className = 'content newUser' id = 'new2' >
          <h1>Do you have a kettle to use for brewing?</h1>
            <button onClick={() => {
              swipeLeft('new2');
              document.getElementById('new3').style.visibility = 'visible';
            }}>Yes</button>
            <button onClick={() => {
              swipeLeft('new2');
              document.getElementById('new2-5').style.visibility = 'visible';
            }}>No</button>
        </div>

        <div className = 'content newUser' id = 'new2-5' >
          <p>Ok, we'll add a kettle to your shopping list. Next, you'll need something to ferment in.</p>
          <button onClick={() => {
            newUser.shoppingList.push('Kettle');
            newUser.readyToBrew = false;
            swipeLeft('new2-5');
            document.getElementById('new4').style.visibility = 'visible';
          }}>OK</button>
        </div>

        <div className = 'content newUser' id = 'new3' >
          <h1>How many gallons will your kettle hold?</h1>
          <div className = 'form-group'>
            <input type = 'number' id = 'kettleSize'></input>
          </div>
          <button onClick={() => {
            const stringToCheck = parseInt(document.getElementById('kettleSize').value);
            if (stringToCheck / stringToCheck === 1) {
              newUser.equipment.kettleSize = stringToCheck;
              swipeLeft('new3');
              document.getElementById('new4').style.visibility = 'visible';
            } else { 
              return alert('Please enter a valid number');
            }
          }}>OK</button>
        </div>

        <div className = 'content newUser' id = 'new4'>
          <h1>How many gallons will your largest fermenter hold?</h1>
          <p>(this is typically a carboy, bucket, or jug of some kind)</p>
          <div className = 'form-group'>
            <input type = 'number' id = 'fermenterSize'></input>
          </div>
          <h1>How many fermenters of this size do you have?</h1>
          <div className = 'form-group'>
            <input type = 'number' id = 'fermenterCount'></input>
          </div>
          <button onClick={() => {
            generateFerms(document.getElementById('fermenterCount').value, document.getElementById('fermenterSize').value);
            swipeLeft('new4');
            document.getElementById('new5').style.visibility = 'visible';
          }}>OK</button>
          <button onClick={() => {
            swipeLeft('new4');
            document.getElementById('new4-5').style.visibility = 'visible';
          }}>I don't have a fermenter</button>
        </div>

        <div className = 'content newUser' id = 'new4-5'>
          <h2>Cool, we'll add that to your shopping list as well! Do you have any other equipment to add?</h2>
          <button onClick={() => {
            swipeLeft('new4-5');
            document.getElementById('new7').style.visibility = 'visible';
          }}>Yes</button>
          <button onClick={() => {
            // this is where we'll axios.post the newUser to the server
            swipeLeft('new4-5');
          }}>No</button>
        </div>
        
        <div className = 'content newUser' id = 'new5'>
        </div>
      </div>
    )
  }
}

export default UserCreator;