import React from 'react';
import Auth from '../../utils/auth';
import {Container, Row, Col, Button} from 'react-bootstrap'

const Profile = () => {
  console.log(Auth.getProfile().data)
  return (
  <>
    <Container className='profile-container'>
      <Row>
        <Col>
          <h3>
            Posts
          </h3>
        </Col>
        {/* <div className='line'></div> */}
        <Col>
          <h3>
            Profile details
          </h3>
          <p>
            Email: {Auth.getProfile().data.email}
            
          </p>
          <p>
            Username: {Auth.getProfile().data.username}
          </p>
          <Button>Delete Account</Button>
        </Col>
      </Row>

    
    </Container>
  </>
  );
};

export default Profile;