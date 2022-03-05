import React, { useState } from 'react';
import Nav from './Nav';
import Home from './pages/Home';
import Give from './pages/Give';
import Charities from './pages/Charities';
import Viewreq from './pages/Viewreq';
import Review from './pages/Review';
import Request from './pages/Request';
import Login from './pages/Login';


function Header() {
  const [currentPage, setCurrentPage] = useState('Home');
  //render the correct page based on currentPage state
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Login') {
        return <Login />;
    }
    if (currentPage === 'Charities') {
      return <Charities />;
    }
    if (currentPage === 'Request') {
      return <Request />;
    }
    if (currentPage === 'Give'){
        return <Give />; 
    }
    if (currentPage === 'Viewreq') {
        return <Viewreq />;
    }
    return <Review />;
  };
  //set up function to adjust the currentPage state to be the page that was clicked on
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div>
        <h1>Be A Neighbor</h1>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      {renderPage()}
    </div>
  );
}

export default Header;