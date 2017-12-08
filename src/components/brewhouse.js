import React, { Component } from 'react';

import userData from '../assets/user-data.js';
import NavBar from './navbarSplash.js';

import '../styles/brewhouse.css';

import emptyCarboy from '../images/emptycarboy.png';

const user = userData[0];
const carboyData = Object.entries(user.equipment.fermenters);


class Brewhouse extends Component {
  render(){
    return(
      <div className = 'brewhousePage'>
        < NavBar />
        <div className = 'carboyBox'>
          { carboyData.map((currentCarboy) => {
            console.log(currentCarboy);
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


export default Brewhouse;