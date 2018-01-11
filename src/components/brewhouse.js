import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
 
import userData from '../assets/user-data.js';
import NavBar from './navbarSplash.js';

import '../styles/brewhouse.css';

import emptyCarboy from '../images/emptycarboy.png';




class Brewhouse extends Component {
  render(){
    const user = this.props.user;
    const carboyData = Object.entries(user.equipment.fermenters);
    return(
      <div className = 'brewhousePage'>
        < NavBar />
        <div className = 'carboyBox'>
          { carboyData.map((currentCarboy) => {
            console.log (this.props);
            if (currentCarboy[1].activeRecipe !== '') {
              const currentRecipeColor = user.recipes[currentCarboy[1].activeRecipe].recipeColor.HEX;
              return <div className = 'carboyItem' >
                <img src = { emptyCarboy } style = 
                  {{backgroundColor: currentRecipeColor}}/>
                <h2>{ currentCarboy[1].activeRecipe }</h2>
              </div>
            }
          })
          }
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