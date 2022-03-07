import React from 'react';
<<<<<<< HEAD
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_USER, QUERY_ME } from '../../utils/queries';

=======
>>>>>>> 5556c5f33ceac4075d3af7c33a18212f7f5bbce5
import Auth from '../../utils/auth';
import {Container, Row, Col} from 'react-bootstrap'

const Profile = () => {
<<<<<<< HEAD
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
<<<<<<< HEAD

  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    // return <Redirect to="/me" />;
    return console.log(Auth.getProfile())
=======
  console.log(Auth.getProfile())
  console.log(userParam)
  console.log(user)
  if (Auth.loggedIn() && Auth.getProfile().data.email === userParam) {
    // return <Navigate to="/me" />;
    return console.log(user)
>>>>>>> 541185020e6ba81dff573db7134633fc6352982c
  }

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (!user?.username) {
  //   return (
  //     <h4>
  //       You need to be logged in to see this. Use the navigation links above to
  //       sign up or log in!
        
  //     </h4>
  //   );
  // }

=======
>>>>>>> 5556c5f33ceac4075d3af7c33a18212f7f5bbce5
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
        </Col>
      </Row>

    </Container>
  </>
  );
};

export default Profile;
