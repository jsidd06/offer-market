import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

function Login() {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    window.location.href = "/";
  }
  return (
    <Container
      className="mt-5"
      style={{ backgroundColor: "black", color: "#000" }}
    >
      <Card
        className="mt-5"
        style={{ backgroundColor: "black", color: "white" }}
      >
        <CardHeader>
          <h3>Login</h3>
        </CardHeader>
        <CardBody>
          <Form onSubmit={submitHandler}>
            <FormGroup>
              <Label>Enter your Username</Label>
              <Input placeholder="enter your username" />
            </FormGroup>
            <FormGroup>
              <Label>Enter your Password</Label>
              <Input placeholder="enter your password" />
            </FormGroup>
            <div className="mt-3">
              <Button
                style={{ marginLeft: 40, marginRight: 40 }}
                className="btn btn-danger"
                type="submit"
              >
                Login
              </Button>
              <Link className="btn btn-info" to="/register">
                Register
              </Link>
            </div>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
}

export default Login;
