import React from 'react';
// Implement later
// import Auth from "../../utils/auth";
// import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from  'react-bootstrap/Container';

export default function Navigation() {
  return (
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Be A Neighbor </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#Charities">Charities</Nav.Link>
        <Nav.Link href="#View">View Requests and Items</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}
