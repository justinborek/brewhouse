import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';

import { updateUser } from '../actions';

import '../styles/recipeSelect.css';

let recipes = [];

let counter = 0;

axios
  .get('http://localhost:3030/recipes')
  .then(response => {
    response.data.forEach(recipe => {
      recipes[counter] = recipe;
      counter++;
    });
  })
  .catch(err => {
    console.log(`Error in recipeSelect componentDidMount ${err}`);
  });

class RecipeSelect extends Component {
  constructor(...args) {
		super(...args);

		this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.chooseRecipe = this.chooseRecipe.bind(this);
    this.moveToBrewhouse = this.moveToBrewhouse.bind(this);
    

    this.state = { showModal: false };
    this.state = { recipeChoice: {} };
	}

	handleClose() {
		this.setState({ showModal: false });
	}

	handleShow() {
		this.setState({ showModal: true });
  }

  chooseRecipe(recipe) {
    this.setState({ recipeChoice: recipe });
  }

  moveToBrewhouse() {
    let fermArr = this.props.user.equipment.fermenters;
    for (let i = 0; i < fermArr.length; i++) {
      if (!fermArr[i].activeRecipe) {
        fermArr[i].activeRecipe = this.state.recipeChoice;
        return;
      }
      this.handleClose();
      this.props.history.goBack();
    };
  }
  
  render() {
    return (
      <div className = "recipeSelect">
        <Modal show={this.state.showModal} onHide={this.handleClose}>
					<Modal.Body>
						<h4>Let's make sure you're ready to brew.</h4>
						<p>
							Double check that you have all your ingredients.
						</p>
						<p>
							Once you click ready, your brew day will begin. 
						</p>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.handleClose}>Not Yet!</Button>
            <Button onClick={this.moveToBrewhouse}>Ready!</Button>
					</Modal.Footer>
				</Modal>
        <h1>What would you like to brew?</h1>
        <div className = "recipeButton">
          { recipes.map((item) => {
            return (
              <button onClick={() => {
                this.chooseRecipe(item);
                this.handleShow();
              }}>{item.title}</button>
            )
          })}
        </div>
      </div>
    );
  };

  componentWillUnmount() {
    const user = this.props.user;
    this.props.updateUser(user);
  };

};

const mapStateToProps = (state) => {
  return { 
    user: state.user
  };
}

export default connect(mapStateToProps, { updateUser })(RecipeSelect);