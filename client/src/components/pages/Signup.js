import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
<<<<<<< HEAD
import {addUser} from "../../utils/API";
=======
import { ADD_USER } from "../../utils/mutations";
>>>>>>> 010ed36dcce36bf51575da668a55aac5f93e0477
import { Form, Button, Container } from "react-bootstrap";


const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChangeUser = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setFormState({
      ...formState,
      username: value,
    });
  };

  const handleChangeEmail = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setFormState({
      ...formState,
      email: value,
    });
  };

  const handleChangePw = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setFormState({
      ...formState,
      password: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      console.log(data);
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (

          <div className="user-forms">
            <h2 className="text-center">Signup</h2>
            <Container>
            {data ? (
              <p>
                Success! You may now head{" "}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Text className="text-muted"></Form.Text>
                    <Form.Control 
                    // Works but is ugly
                  //   <input
                  //   className="form-input"
                  //   placeholder="Your username"
                  //   name="username"
                  //   type="text"
                  //   value={formState.username}
                  //   onChange={handleChange}
                  // />

                    // Doesn't work but is pretty
                    name="username"
                    type="username" 
                    placeholder="Enter username"
                    // value={formState.username}
                    onChange={handleChangeUser}


                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                    type="email" 
                    placeholder="Enter email"
                    name='email'
                    onChange={handleChangeEmail}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    name='password'
                    onChange={handleChangePw}
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
          </div>

  );
};

export default Signup;
