import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import GoogleMapReact from 'google-map-react'
import '../styles/map.css'
import Map from './Map';

export default function request() {
  const location = {
    lat: 33.749,
    lng: -84.388,
  }
  const zoomLevel = 13
  const LocationPin = ({ text }) => (
    <div className="pin">
      <p className="pin-text">{text}</p>
    </div>
  )
  return (
      <div className='footer'>
        <Container>
          <Row>
            <Col className='footer-col'>
              <h3 className='fw-bold text-center'>Contact Us</h3>
              <p className='fw-bold'>
                Office and Mailing
              </p>
              <p>
              123 East 123th Street, Suite 123
              Atlanta, Ga 12345
              <br></br>
              <br></br>
              Our office is in the downtown town near the building. Currently it is not open. Our mail is inconsistent. If mail is returned to you, please email us. Thank you!
              </p>
              <p className='fw-bold'>
                Phone
              </p>
              <p>
              123.456.7890
              </p>
              <p className='fw-bold'>
                Email
              </p>
              <p>
              beaneighbor.org
              </p>
            </Col>
            <Col>
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
            </Col>
          </Row>
        </Container>
      </div>
  )
}
