import React, { Component } from 'react';
import userData from '../assets/user-data.js';
import NavBar from '../navbar/navbar.js';

const user = userData[0];
const carboyData = Object.values(user.equipment.carboy)
class Brewhouse extends Component {
  render (){
    for (let i = 0; i < carboyData.length; i++){
      if (carboyData[i] !== 0) {
        return (
          <div>{ carboyData }</div>
        )
      }
  }
  }
}


export default Brewhouse;