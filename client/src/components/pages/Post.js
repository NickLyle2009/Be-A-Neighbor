import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
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
    <div className='container d-flex flex-row'>

    <div className="card-body">
      <h4 className="card-title">Donation</h4>
    
       <p className="card-text">I am giving away a dirty ashtray to anyone that still smokes real cigarettes</p>
       <h6>User ID</h6>
      <div className= "d-flex flex-row">
      <button type="button" className="btn btn-primary me-3">back</button>
      
      <button type="button" className="btn btn-success ms-3">next</button>
    </div>
  </div>

    

    <div className="map">
    <h4 className="map-h2">Come Visit Us At Our Campus</h4>
 
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
  </div>

  );
}

