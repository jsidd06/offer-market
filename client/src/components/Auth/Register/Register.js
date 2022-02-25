import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, Form, FormGroup, Input, Label } from 'reactstrap'

function Register() {
  return (
    <Component>
      <Card>
        <CardHeader>
          <h3>Register</h3>
        </CardHeader>
        <CardBody>
          <Form>
            <FormGroup>
              <Label>First Name</Label>
              <Input placeholder="First Name" />
            </FormGroup>
            <FormGroup>
              <Label>Create your Username</Label>
              <Input placeholder="create your username" />
            </FormGroup>
            <FormGroup>
              <Label>Create your Password</Label>
              <Input placeholder="create your password" />
            </FormGroup>
            <div>
              <Button type="submit">Register</Button>
              <Link to="/login">Login</Link>
            </div>
          </Form>
        </CardBody>
      </Card>
    </Component>
  );
}

export default Register