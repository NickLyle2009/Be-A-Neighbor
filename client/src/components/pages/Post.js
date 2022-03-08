import React from 'react';
// import Sidebar from '../Sidebar';

import PostList from '../PostList'

import GoogleMapReact from 'google-map-react'
import '../../styles/map.css'


export default function Post() {
  
  const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  }
  const zoomLevel = 13
  const LocationPin = ({ text }) => (
    <div className="pin">
     
      <p className="pin-text">{text}</p>
    </div>
  )
  return (
    <div>
      {/* <Sidebar/> */}
      <PostList/>

    <div>Post</div>
  
    <div className="map">
    <h2 className="map-h2">Come Visit Us At Our Campus</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBV9UALmaJWfmjdB4AzcrXq4Xm5oUrLrx0' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div> 
  </div>

  )
}
