import React from 'react';
import Auth from '../utils/auth';
import {Container, Navbar, Nav,  Button} from 'react-bootstrap';

function Navigation() {
  return (
    <div>
<Navbar bg="primary" variant="dark" expand="lg">
  <Container>
    {/* <Navbar.Brand href='/'>Be A Neighbor</Navbar.Brand> */}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
          {/* Make about use page later */}
        <Nav.Link href='/'>About Us</Nav.Link>
        {/* Add posts later */}
        <Nav.Link href='/posts'>Posts</Nav.Link>
        <Nav.Link href='/give'>Give</Nav.Link>
        <Nav.Link href='/request'>Request</Nav.Link>
        {Auth.loggedIn()?(
            // Put signout button in profile page
            <>
            <Nav.Link href='/me'>Profile</Nav.Link>
            <Button onClick={Auth.logout}>Logout</Button>
            </>
        ):(
          <>
            <Nav.Link href='/signup'>Signup</Nav.Link>
            <Nav.Link href='/login'>Login</Nav.Link>
            </>
        )}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
}

export default Navigation;

