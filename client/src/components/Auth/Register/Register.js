import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, Container, Form, FormGroup, Input, Label } from 'reactstrap'
function Register() {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    window.location = "/login";
  };
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
          <h3>Register</h3>
        </CardHeader>
        <CardBody>
          <Form onSubmit={submitHandler}>
            <FormGroup>
              <Label>Full Name</Label>
              <Input placeholder="Full Name" />
            </FormGroup>
            <FormGroup>
              <Label>Create your Username</Label>
              <Input placeholder="create your username" />
            </FormGroup>
            <FormGroup>
              <Label>Create your Password</Label>
              <Input placeholder="create your password" />
            </FormGroup>
            <div className="mt-3">
              <Button
                style={{ marginLeft: 40, marginRight: 40 }}
                className="btn btn-info"
                type="submit"
              >
                Register
              </Button>
              <Link className="btn btn-danger" to="/login">
                Login
              </Link>
            </div>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
}

export default Register