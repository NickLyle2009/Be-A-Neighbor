import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';



export default function request() {
  return (
      <div className='footer'>
        <Container>
          <Row>
            <Col>
              <h3 className='fw-bold'>Contact Us</h3>
              <p className='fw-bold'>
                Office and Mailing
              </p>
              <p>
              123 East 123th Street, Suite 123
              Some City, ST 12345
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
              <h3 className='fw-bold'>Place holder</h3>
              <p className='fw-bold'>
                Link
              </p>
              <p>
              123 East 123th Street, Suite 123
              Some City, ST 12345
              <br></br>
              <br></br>
              Our office is in the downtown town near the building. Currently it is not open. Our mail is inconsistent. If mail is returned to you, please email us. Thank you!
              </p>
              <p className='fw-bold'>
                Link
              </p>
              <p>
              123.456.7890
              </p>
              <p className='fw-bold'>
                Link
              </p>
              <p>
              beaneighbor.org
              </p>
            </Col>
          </Row>
        </Container>
      </div>
  )
}
