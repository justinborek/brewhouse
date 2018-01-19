import React, { Component } from 'react';
import { Carousel, Button, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../styles/carousel.css';

import emptyCarboy from '../images/emptycarboy.png';
import SRMtoRGB from '../assets/color-conversion';

class CarouselInstance extends Component {
  componentWillMount() {
    let carboyDataTwo = [];
    this.props.user.equipment.fermenters.map((carboy) => {
      if (carboy.activeRecipe) {
        carboyDataTwo.push(carboy);
      }
    });
    this.setState({ carboyData: carboyDataTwo})
  }
  constructor(...args) {
		super(...args);

		this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    
    this.state = { 
      showModal: false,
      index: 0, 
      direction: null,
      activeSlide: this.props.user.equipment.fermenters[0].activeRecipe
    };
	}

	handleClose() {
		this.setState({ showModal: false });
	}

	handleShow() {
		this.setState({ showModal: true });
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
      activeSlide: this.state.carboyData[selectedIndex].activeRecipe
    })
  }

  render() {
    return (
      <Carousel 
        activeIndex={this.state.index}
        direction={this.state.direction}
        onSelect={this.handleSelect}
      >
        { this.state.carboyData.map((currentCarboy) => {
          if (currentCarboy.activeRecipe) {
            const currentRecipeColor = SRMtoRGB[currentCarboy.activeRecipe.color];
            return (
              <Carousel.Item className = 'carboyItem'>
                <Modal show={this.state.showModal} onHide={this.handleClose}>
                  <Modal.Body>
                    <h4>{this.state.activeSlide.title}</h4>
                    <p>
                      {this.state.activeSlide.color}
                    </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={this.handleClose}>Close</Button>
                  </Modal.Footer>
                </Modal>
                <img 
                  width={200}
                  height={200}
                  src={ emptyCarboy }  
                  style={{backgroundColor: currentRecipeColor}}/>
                <Carousel.Caption className = 'caption'>
                  <h3>{currentCarboy.activeRecipe.title}</h3>
                </Carousel.Caption>
                <Button onClick={this.handleShow}>Session Info</Button>
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
    user: state.user,
  };
};

export default connect(mapStateToProps)(CarouselInstance);
