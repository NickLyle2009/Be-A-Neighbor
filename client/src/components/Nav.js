import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';


function Nav({ currentPage, handlePageChange }) {
  const logout = (e) => {
    e.preventDefault();
    Auth.logout();
    console.log('Should logout')
  };
  return (
    <div>
    <h1>Be A Neighbor</h1>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
         to="/charities"
          onClick={() => handlePageChange('Charities')}
          className={currentPage === 'Charities' ? 'nav-link active' : 'nav-link'}
        >
          Charities
        </Link>
      </li>
      <li className="nav-item">
        <Link
         to="/viewreq"
          onClick={() => handlePageChange('Viewreq')}
          className={currentPage === 'Viewreq' ? 'nav-link active' : 'nav-link'}
        >
          View Requests and Items
        </Link>
      </li>
      <li className="nav-item">
        <Link
         to="/request"
          onClick={() => handlePageChange('Request')}
          className={currentPage === 'Request' ? 'nav-link active' : 'nav-link'}
        >
          Request
        </Link>
      </li>
      <li className="nav-item">
        <Link
         to="/give"
          onClick={() => handlePageChange('Give')}
          className={currentPage === 'Give' ? 'nav-link active' : 'nav-link'}
        >
          Give 
        </Link>
      </li>
      <li className="nav-item">
        <Link
         to="/review"
          onClick={() => handlePageChange('Review')}
          className={currentPage === 'Review' ? 'nav-link active' : 'nav-link'}
        >
          Leave Your Story
        </Link>
      </li>
          {/* If the user is logged in */}
        {Auth.loggedIn() ? (
                  <li className="nav-item">
                  <Link to="/me">
                     Profile
                  </Link>
                  <button className="" onClick={logout}>
                    Logout
                  </button>
                </li>
        ) : (
          <li className="nav-item">
              <Link to="/login">
                Login
              </Link>
              <Link to="/signup">
                Signup
              </Link>
        </li>
        )}


      {/* <li className="nav-item">
        <Link
         to="/map"
          onClick={() => handlePageChange('Login')}
          className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
        >
          Login/Signup
        </Link>
      </li> */}
    </ul>
    </div>
  );
}

export default Nav;

