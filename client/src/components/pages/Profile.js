import React from 'react';
import Auth from '../../utils/auth';
import {Container, Row, Col} from 'react-bootstrap'

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
<<<<<<< HEAD
          {/* <Button>Delete Account</Button> */}
=======
>>>>>>> 010ed36dcce36bf51575da668a55aac5f93e0477
        </Col>
      </Row>

    </Container>
  </>
  );
};

export default Profile;