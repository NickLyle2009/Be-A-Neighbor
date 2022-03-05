import React from 'react';
import { Link } from 'react-router-dom';


function Nav({ currentPage, handlePageChange }) {
  return (
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
          Request Needs
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
      <li className="nav-item">
        <Link
         to="/login"
          onClick={() => handlePageChange('Login')}
          className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
        >
          Login/Signup
        </Link>
      </li>
      <li className="nav-item">
        <Link
         to="/map"
          onClick={() => handlePageChange('Login')}
          className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
        >
          Login/Signup
        </Link>
      </li>
    </ul>
  );
}

export default Nav;

