import React from "react";
import {Form, Button, Container} from 'react-bootstrap'

export default function Signup() {
        return (
            <div>
            <Container>
                <Form>
            <Form.Group>
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your username"
            name="username"
            // onChange={handleInputChange}
            // value={userFormData.username}
            required
          />
          <Form.Control.Feedback type="invalid">
            Username is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Your email address"
            name="email"
            // onChange={handleInputChange}
            // value={userFormData.email}
            required
          />
          <Form.Control.Feedback type="invalid">
            Email is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Your password"
            name="password"
            // onChange={handleInputChange}
            // value={userFormData.password}
            required
          />
          </Form.Group>
          <Button
        //   disabled={
        //     !(
        //       userFormData.username &&
        //       userFormData.email &&
        //       userFormData.password
        //     )
        //   }
          type="submit"
          variant="primary"
        >
          Submit
        </Button>
            </Form>
            </Container>
            </div>
        );
}