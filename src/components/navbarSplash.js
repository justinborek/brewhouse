import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/navbar.css';
import brewhouseLogo from '../images/brewhouse7white.png';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <img src = {brewhouseLogo} className = "logo" />
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem><Link className = "navLink" to="UserCreator">Sign Up</Link></NavItem>
        <NavItem><Link className = "navLink" to="Login">Log In</Link></NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    );
  }
}

export default NavBar;