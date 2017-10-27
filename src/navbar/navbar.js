import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './navbar.css';
import brewhouseLogo from '../images/brewhouse7white.png';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';


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
      {/* <Nav>
        <NavItem eventKey={1} href="#">Link</NavItem>
        <NavItem eventKey={2} href="#">Link</NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav> */}
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Sign Up</NavItem>
        <NavItem eventKey={2} href="#">Log In</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    );
  }
}

export default NavBar;