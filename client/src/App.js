import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
// import Signup from "./components/Signup";
import Header from "./components/Header";
import Request from "./components/pages/Request";




// This is Google Maps code from line .
 

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
} 
// This ends the Google Maps code

function App() {
  return (
   
    <div className="App">
     <Router>
      <Header>
        <Nav />
      </Header>
      <Routes>
        <Route path="/request" element = {<Request />} />
        
      {/* <Charities /> */}
      {/* <Review />  */}
      </Routes>
     </Router> 
    </div>
    
  );
}

export default App;
