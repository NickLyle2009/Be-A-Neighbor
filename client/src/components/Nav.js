import React from 'react';

function Nav({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#charities"
          onClick={() => handlePageChange('Charities')}
          className={currentPage === 'Charities' ? 'nav-link active' : 'nav-link'}
        >
          Charities
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#viewreq"
          onClick={() => handlePageChange('Viewreq')}
          className={currentPage === 'Viewreq' ? 'nav-link active' : 'nav-link'}
        >
          View Requests and Items
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#request"
          onClick={() => handlePageChange('Request')}
          className={currentPage === 'Request' ? 'nav-link active' : 'nav-link'}
        >
          Request Needs
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#give"
          onClick={() => handlePageChange('Give')}
          className={currentPage === 'Give' ? 'nav-link active' : 'nav-link'}
        >
          Give 
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#review"
          onClick={() => handlePageChange('Review')}
          className={currentPage === 'Review' ? 'nav-link active' : 'nav-link'}
        >
          Leave Your Story
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#login"
          onClick={() => handlePageChange('Login')}
          className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
        >
          Login/Signup
        </a>
      </li>
    </ul>
  );
}

export default Nav;

