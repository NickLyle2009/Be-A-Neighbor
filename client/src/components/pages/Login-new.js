import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';
import { Form, Button, Container } from "react-bootstrap";
import Auth from '../../utils/auth';

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN);
  
    const handleChangeEmail = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    const handleChangePW = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(formState);
      try {
        const { data } = await login({
          variables: { ...formState },
        });
  
        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }
  
      setFormState({
        email: '',
        password: '',
      });
    };

  return (
    //   <div>slayyyy queen</div>
    <main>
        <h1 className='text-center'>Login</h1>
        <Container>
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                        type="email" 
                        placeholder="Enter email"
                        value={formState.email}
                        onChange={handleChangeEmail}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        value={formState.password}
                        onChange={handleChangePW}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
            </Container>
    </main>
  );
};

export default Login;
