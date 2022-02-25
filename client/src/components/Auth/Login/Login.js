import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

function Login() {
  return (
    <Component>
      <Card>
        <CardHeader>
          <h3>Login</h3>
        </CardHeader>
        <CardBody>
          <Form>
            <FormGroup>
              <Label>Enter your Username</Label>
              <Input placeholder="enter your username" />
            </FormGroup>
            <FormGroup>
              <Label>Enter your Password</Label>
              <Input placeholder="enter your password" />
            </FormGroup>
            <div className="m-3 p-4">
              <Button className="btn btn-primary"type="submit">Login</Button>
              <Link className="btn btn-primary" to="/register">Register</Link>
            </div>
          </Form>
        </CardBody>
      </Card>
    </Component>
  );
}

export default Login;
