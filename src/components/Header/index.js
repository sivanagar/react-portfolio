import React from "react";
import Menu from '../Menu';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand>Sivan Kaplan</Navbar.Brand>
      <Menu></Menu>
      </Container>
    </Navbar>
  )
};

export default Header;