import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Header extends Component {

  render(){
    let page;

    return(
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            Github Viewer
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          {page}
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
