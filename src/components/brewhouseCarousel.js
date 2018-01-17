import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../styles/carousel.css';

import emptyCarboy from '../images/emptycarboy.png';
import SRMtoRGB from '../assets/color-conversion';

class CarouselInstance extends Component {
  render() {
    const user = this.props.user;
    const carboyData = user.equipment.fermenters;
    return (
      <Carousel>
        { carboyData.map((currentCarboy) => {
            if (currentCarboy.activeRecipe) {
              const currentRecipeColor = SRMtoRGB[currentCarboy.activeRecipe.color];
              return (
                <Carousel.Item className = 'carboyItem' >
                  <img 
                    width={200}
                    height={200}
                    src={ emptyCarboy }  
                    style={{backgroundColor: currentRecipeColor}}/>
                  <Carousel.Caption className = 'caption'>
                    <h3>{currentCarboy.activeRecipe.title}</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              )
            }
        })}
      </Carousel>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(CarouselInstance);
