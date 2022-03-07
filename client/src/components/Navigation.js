import React from 'react';
import Auth from '../utils/auth';
<<<<<<< HEAD
import {Container, Navbar, Nav, Button} from 'react-bootstrap';

=======
import {Container, Navbar, Nav,  Button} from 'react-bootstrap';
>>>>>>> 5556c5f33ceac4075d3af7c33a18212f7f5bbce5

function Navigation() {
  return (
    <div>
<Navbar className='nav fw-bold' variant="dark" expand="lg">
  <Container>
    {/* <Navbar.Brand href='/'>Be A Neighbor</Navbar.Brand> */}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
          {/* Make about use page later */}
        <Nav.Link className='nav-link' href='/'>About Us</Nav.Link>
        {/* Add posts later */}
        <Nav.Link  href='/posts'>Posts</Nav.Link>
        <Nav.Link href='/give'>Give</Nav.Link>
        <Nav.Link href='/request'>Request</Nav.Link>
        {Auth.loggedIn()?(
            // Put signout button in profile page
            <>
            <Nav.Link href='/me'>Profile</Nav.Link>
<<<<<<< HEAD
            <Button variant="outline-light" onClick={Auth.logout()}>logout</Button>{' '}
=======
            <Button onClick={Auth.logout}>Logout</Button>
>>>>>>> 5556c5f33ceac4075d3af7c33a18212f7f5bbce5
            </>
        ):(
          <>
            <Nav.Link href='/signup'>Signup</Nav.Link>
            <Nav.Link href='/login'>Login</Nav.Link>
<<<<<<< HEAD
          </>
=======
            </>
>>>>>>> 5556c5f33ceac4075d3af7c33a18212f7f5bbce5
        )}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
}

export default Navigation;

