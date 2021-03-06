import React, { Component } from 'react';
import '../styles/splash.css';
import NavBar from './navbarSplash.js';
import image1 from '../images/homebrew1.png';
import { Button } from 'react-bootstrap';


class Splash extends Component {

render() {
  return (
    <div className="splashPage">
      <NavBar/>
      <div className = "section1">
        <div className = 'section1_Content'>
          <h1> A better way to brew. </h1>
          <button onClick={() => {
              this.props.history.push('UserCreator')
            }}><span>Try it!</span></button>
        </div>
      </div>
      <div className = "section2">
      </div>
      <div className = "section3">
      </div>
      <div className = "section4">
      </div>
      <div className = "footer">
        <button><i class="fa fa-facebook-official" aria-hidden="true"></i></button>
        <button><i class="fa fa-twitter" aria-hidden="true"></i></button>
        <button><i class="fa fa-instagram" aria-hidden="true"></i></button>
      </div>
    </div>
  );
}
}

export default Splash;