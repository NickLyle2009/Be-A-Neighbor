import React from 'react';
import Auth from '../utils/auth';
import {Container, Navbar, Nav} from 'react-bootstrap';

function Navigation() {
  return (
    <div>
<Navbar className='nav fw-bold' variant="dark" expand="lg">
  <Container>
    {/* <Navbar.Brand href='/'>Be A Neighbor</Navbar.Brand> */}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link  href='/'>Home</Nav.Link>
        <Nav.Link  href='/posts'>Posts</Nav.Link>
        <Nav.Link  href='/charity'>Charities</Nav.Link>
        {Auth.loggedIn()?(
            // Put signout button in profile page
            <>
            <Nav.Link href='/me'>Profile</Nav.Link>
            <Nav.Link className='logout-btn fw-bold ' onClick={Auth.logout}>Logout</Nav.Link>
            <Nav.Link href='/give'>Give</Nav.Link>
            <Nav.Link href='/request'>Request</Nav.Link>
            <Nav.Link className='nav-link' href='/'>About Us</Nav.Link>
            </>
        ):(
          <>
            <Nav.Link href='/signup'>Signup</Nav.Link>
            <Nav.Link href='/login'>Login</Nav.Link>
            <Nav.Link className='nav-link' href='/'>About Us</Nav.Link>
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

