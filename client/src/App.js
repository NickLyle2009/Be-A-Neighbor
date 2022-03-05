import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Signup from "./components/Signup";
import React from "react";
import Header from "./components/Header";





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
      <Header>
        <Nav />
      </Header>
      {/* <Charities /> */}
      {/* <Review />  */}
      
    </div>
  );
}

export default App;
