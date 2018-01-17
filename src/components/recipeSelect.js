import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import '../styles/recipeSelect.css';

let recipes = [];

class RecipeSelect extends Component {
  componentDidMount() {
    axios
    .get('http://localhost:3030/recipes')
    .then(response => {
      response.data.forEach(recipe => {
        recipes.push(recipe);
      });
    })
    .catch(err => {
      console.log(`Error in recipeSelect componentDidMount ${err}`);
    });
  };
  
  render() {
    console.log(recipes);
    console.log(recipes.length);
    return (
      <div className = "recipeSelect">
        <h1>What would you like to brew?</h1>
        <div>
          { recipes.map((item) => {
            console.log(item);
          })}
        </div>
      </div>
    );
  };

};

const mapStateToProps = (state) => {
  return { 
    user: state.user
  };
}

export default connect(mapStateToProps)(RecipeSelect);