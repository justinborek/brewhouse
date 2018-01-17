import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import { Splash, Brewhouse, Login, UserCreator, RecipeSelect } from './components';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact={true} path="/" component={Splash} />
        <Route path="/Login" component={Login} />
        <Route path="/Brewhouse" component={Brewhouse} />
        <Route path='/UserCreator' component={UserCreator} />
        <Route path='/RecipeSelect' component={RecipeSelect} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

export default App;

