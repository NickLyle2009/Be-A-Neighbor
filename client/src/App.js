import React from 'react'
import Navigation from "./components/Nav";
import MapSection from './components/map/Map';  //google map page
// import Signup from "./components/Signup";

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
      <Navigation />
      <MapSection location={location} zoomLevel={17} />
    </div>
  );
}

export default App;
