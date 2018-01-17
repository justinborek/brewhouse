import React, { Component } from 'react';

import '../styles/userCreator.css';

import { getUser, addUser } from '../actions';

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
};

const bringBack = (element) => {
  document.getElementById(element).style.visibility = 'hidden';
  document.getElementById(element).style.opacity = '1';
  document.getElementById(element).style.left = '50%';
}

const setVisibility = (element) => {
  document.getElementById(element).style.visibility = 'visible';
};

const generateFerms = (count, fermSize) => {
  const startPos = newUser.equipment.fermenters.length;
  const endPos = parseInt(startPos) + parseInt(count);
  for (let i = startPos; i < endPos; i++) {
    newUser.equipment.fermenters.push ({
      size: fermSize,
      activeRecipe: {}
    })
  }
};

class UserCreator extends Component {
  verifyBasicInfo = (name, email, user, pass, pass2) => {
    const checkUser = getUser(user);
    console.log(`this is the checkUser val in usercreator ${checkUser}`);
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
    } else if (checkUser === {}){
      return alert("Username already in use");
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
      fermenters: [],
      otherEquipment: []
    };
    newUser.recipes = [];
    newUser.shoppingList = [];
    newUser.isSubscriber = false;
    newUser.readyToBrew = true;
    userPassCheck = true;
  };

  completeForm = (user) => {
    addUser(newUser);
    this.props.history.push('Login');
  };
  
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
              setVisibility('info2')
              userPassCheck = false;
            }
          }}>Submit</button>
        </div>
        
        <div className = 'content' id = 'info2' >
          <h1>Thanks {newUser.firstName}!</h1>
          <p>Are you already a brewer?</p>
          <button onClick={() => {
            swipeLeft('info2');
            setVisibility('brew1');
          }}>Yes</button>
          <button onClick={() => {
            swipeLeft('info2');
            setVisibility('new1');
          }}>No</button>
        </div>

        <div className = 'content newUser' id = 'brew1' >
          <h1>Thanks!</h1>
          <p>Next, we're going to ask about the equipment you've got. 
            It'll just take a few minutes and you can always add or remove
            things later.</p>
          <button onClick={() => {
            swipeLeft('brew1');
            setVisibility('brew2');
          }}>Get Started</button>
        </div>

        <div className = 'content newUser' id = 'brew2' >
          <h1>How many gallons will your largest brew kettle hold?</h1>
          <div className = 'form-group'>
            <input type = 'number' id = 'kettleSize'></input>
          </div>
          <button onClick={() => {
            const stringToCheck = parseInt(document.getElementById('kettleSize').value);
            if (stringToCheck / stringToCheck === 1) {
              newUser.equipment.kettleSize = stringToCheck;
              swipeLeft('brew2');
              setVisibility('brew3');
            } else { 
              return alert('Please enter a valid number');
            }
          }}>OK</button>
        </div>

        <div className = 'content newUser' id = 'brew3'>
          <h1>What size primary fermenter do you use?</h1>
          <div className = 'form-group'>
            <input type = 'number' id = 'fermenterSize'></input>
          </div>
          <h1>How many primaries of this size do you have?</h1>
          <div className = 'form-group'>
            <input type = 'number' id = 'fermenterCount'></input>
          </div>
          <button onClick={() => {
            generateFerms(document.getElementById('fermenterCount').value, document.getElementById('fermenterSize').value);
            swipeLeft('brew3');
            setVisibility('new5');
          }}>OK</button>
        </div>
        
        <div className = 'content newUser' id = 'new1' >
          <h1>Thanks!</h1>
          <p>Next, we're going to ask about the equipment you've got. 
            We'll make sure you have what you need, and if you don't, 
            we'll make a list of the things you need. You can always add
            or remove equipment later.</p>
          <button onClick={() => {
            swipeLeft('new1');
            setVisibility('new2');
          }}>Get Started</button>
        </div>

        <div className = 'content newUser' id = 'new2' >
          <h1>Do you have a kettle to use for brewing?</h1>
            <button onClick={() => {
              swipeLeft('new2');
              setVisibility('new3');
            }}>Yes</button>
            <button onClick={() => {
              swipeLeft('new2');
              setVisibility('new2-5')
            }}>No</button>
        </div>

        <div className = 'content newUser' id = 'new2-5' >
          <p>Ok, we'll add a kettle to your shopping list. Next, you'll need something to ferment in.</p>
          <button onClick={() => {
            newUser.shoppingList.push('Kettle');
            newUser.readyToBrew = false;
            swipeLeft('new2-5');
            setVisibility('new4');
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
              setVisibility('new4');
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
            setVisibility('new5');
          }}>OK</button>
          <button onClick={() => {
            newUser.shoppingList.push('Fermenter');
            newUser.readyToBrew = false;
            swipeLeft('new4');
            document.getElementById('new4-5').style.visibility = 'visible';
            setVisibility('new4-5');
          }}>I don't have a fermenter</button>
        </div>

        <div className = 'content newUser' id = 'new4-5'>
          <h2>Cool, we'll add that to your shopping list as well! Do you have any other equipment to add?</h2>
          <button onClick={() => {
            swipeLeft('new4-5');
            setVisibility('new7');
          }}>Yes</button>
          <button onClick={() => {
            swipeLeft('new4-5');
            setVisibility('complete');
          }}>No</button>
        </div>

        <div className = 'content newUser' id = 'new5'>
          <h2>Do you have any other fermenters?</h2>
          <button onClick={() => {
            swipeLeft('new5');
            setVisibility('new6');
          }}>Yes</button>
          <button onClick={() => {
            swipeLeft('new5');
            setVisibility('new7');
          }}>No</button>
        </div>
        
        <div className = 'content newUser' id = 'new6'>
          <h1>How many gallons does this fermenter hold?</h1>
          <div className = 'form-group'>
            <input type = 'number' id = 'fermenterSize2'></input>
          </div>
          <h1>How many fermenters of this size do you have?</h1>
          <div className = 'form-group'>
            <input type = 'number' id = 'fermenterCount2'></input>
          </div>
          <button onClick={() => {
            generateFerms(document.getElementById('fermenterCount2').value, document.getElementById('fermenterSize2').value);
            bringBack('new5');
            swipeLeft('new6');
            setVisibility('new5');
          }}>OK</button>
        </div>

        <div className = 'content newUser' id = 'new7'>
          <h1>Almost done! Do you have any other equipment?</h1>
          <h2>(hydrometer, wort chiller, etc... you can always enter this later)</h2>
          <button onClick={() => {
            swipeLeft('new7');
            setVisibility('otherEquipment');
          }}>Yes</button>
          <button onClick={() => {
            swipeLeft('new7');
            setVisibility('complete');
          }}>No</button>
        </div>

        <div className = 'content' id = 'otherEquipment'>
          <h1>PLACEHOLDER FOR OTHER EQUIPMENT</h1>
          <button onClick={() => {
            swipeLeft('otherEquipment');
            setVisibility('complete');
          }}>Ok</button>
        </div>

        <div className = 'content' id = 'complete'>
          <h1>Thanks! You're all set!</h1>
          <h2>Next, we'll redirect you to our login page to sign in with your new account.</h2>
          <button onClick={() => {
            swipeLeft('complete');
            this.completeForm(newUser);
          }}>Ok</button>
        </div> 
      </div>
    )
  }
}

export default UserCreator;