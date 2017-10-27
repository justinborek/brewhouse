import React, { Component } from 'react';
import './splash.css';
import userData from '../user-data.js';
import NavBar from '../navbar/navbar.js';
import image1 from '../images/homebrew1.png';

class Splash extends Component {

render() {
  return (
    <div className="splashPage">
      <NavBar/>
      <div className = "section section1">
      <p>A better way to brew.</p>
      </div>
    </div>
  );
}
}

export default Splash;