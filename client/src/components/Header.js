// import React, { useState } from 'react';
// import Nav from './Nav';
// import Home from './pages/Home';
// import Give from './pages/Give';
// import Charities from './pages/Charities';
// import Viewreq from './pages/Viewreq';
// import Review from './pages/Review';
// import Request from './pages/Request';


// function Header() {
//   const [currentPage, setCurrentPage] = useState('Home');
//   //render the correct page based on currentPage state
//   const renderPage = () => {
//     if (currentPage === 'Home') {
//       return <Home />;
//     }
//     if (currentPage === 'Login') {
//         return <Login />;
//     }
//     if (currentPage === 'Charities') {
//       return <Charities />;
//     }
//     if (currentPage === 'Request') {
//       return <Request />;
//     }
//     if (currentPage === 'Give'){
//         return <Give />; 
//     }
//     if (currentPage === 'Viewreq') {
//         return <Viewreq />;
//     }
//     return <Review />;
//   };
//   //set up function to adjust the currentPage state to be the page that was clicked on
//   const handlePageChange = (page) => setCurrentPage(page);

//   return (
//     <div>
//       <div>
//         <h1>Be A Neighbor</h1>
//         <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
//       </div>
//       {renderPage()}
//     </div>
//   );
// }

// export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav} from 'react-bootstrap';
import Auth from '../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (

      // <Navbar>
      //   <Container>
      //   <div>
      //     <Link to="/">
      //       <h1 className="m-0">Be A Neighbor</h1>
      //     </Link>
      //   </div>
      //   <div>
      //     {Auth.loggedIn() ? (
      //       <>
      //         <Link className="btn btn-lg btn-info m-2" to="/me">
      //           {Auth.getProfile().data.username}'s profile
      //         </Link>
      //         <button className="btn btn-lg btn-light m-2" onClick={logout}>
      //           Logout
      //         </button>
      //       </>
      //     ) : (
      //       <>
      //         <Link className="btn btn-lg btn-info m-2" to="/login">
      //           Login
      //         </Link>
      //         <Link className="btn btn-lg btn-light m-2" to="/signup">
      //           Signup
      //         </Link>
      //       </>
      //     )}
      //   </div>
      //   </Container>
      // </Navbar>

<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Be A Neighbor</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Donations</Nav.Link>
        <Nav.Link href="#link">Requests</Nav.Link>
        <Nav.Link href="#link">Profile</Nav.Link>
        <div className='d-flex'>
        {Auth.loggedIn() ? (
            <>
              <Nav.Link  to="/me">
                {Auth.getProfile().data.username}'s profile
              </Nav.Link>
              <button onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Nav.Link  to="/login">
                Login
              </Nav.Link>
              <Nav.Link to="/signup">
                Signup
              </Nav.Link>
            </>
          )}
        </div>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


  );
};

export default Header;
