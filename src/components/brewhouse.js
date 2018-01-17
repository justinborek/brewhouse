import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
 
import NavBar from './navbarSplash.js';
import CarouselInstance from './brewhouseCarousel';

import '../styles/brewhouse.css'; 

let fermTextHeader = '';
let fermTextP = '';
let buttonText = ''


class Brewhouse extends Component {
  componentWillMount() {
    if (!this.props.user.username) {
      this.props.history.push('Login');
    }
  }

  setFermenterStatus = () => {
    this.props.user.equipment.fermenters.forEach(item => {
      if (!item.activeRecipe) {
        fermTextHeader = "Looks like you've got some empty carboys";
        fermTextP = 'We should do something about that!';
        buttonText = `Let's brew!`;
        return;
      } else {
        fermTextHeader = "Looks like you've filled all your carboys";
        fermTextP = "You've been busy!";
        buttonText = "Add carboys";
      }
    });
  };

  render(){
    this.setFermenterStatus();

    return(
      <div className = 'brewhousePage'>
        < NavBar />
        <div className = 'carboyBox'>
          < CarouselInstance />
        </div>
        <div className = 'fermText'>
          <h3>{fermTextHeader}</h3>
          <h3>{fermTextP}</h3>
          <button onClick = {() => {
            this.props.history.push('RecipeSelect')
          }}>{buttonText}</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};


export default connect(mapStateToProps)(Brewhouse);