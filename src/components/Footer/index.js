import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    
    <footer>
       <Navbar bg="dark" variant="dark" className="justify-content-center">
       <Nav >
         <Nav.Item><Nav.Link href="https://github.com/sivanagar">GitHub</Nav.Link></Nav.Item>
         <Nav.Item><Nav.Link href="https://www.linkedin.com/in/sivan-kaplan-751961228/">Linkedin</Nav.Link></Nav.Item>
         <Nav.Item><Nav.Link href="https://twitter.com/SivanKaplan">Twitter</Nav.Link></Nav.Item>
      </Nav>
      </Navbar>
    </footer>
    
  );
}

export default Footer;