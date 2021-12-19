import React from 'react';
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';

function Menu() {
  return (
  <Nav>
      <Nav.Item><Nav.Link>About Me</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link>Portfolio</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link>Contact</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link>Resume</Nav.Link></Nav.Item>
  </Nav>
  
  )
};

export default Menu;